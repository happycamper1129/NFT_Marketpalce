import {NftAPI} from "../../get-utils";
import {viewFunction} from "../rpc";
import {Nft} from "../../../models/nft";
import {buildUID, getPrice} from "../utils";
import {TokenPrices} from "../types/response/market";
import {Token} from "../types/token";
import {marketAPI} from "../market";
import {ContractId} from "../../../models/types";
import {ContractVerificationStatus} from "../../../models/contract";
import {getNftMintedSiteInfo} from "../../../whitelisted.contracts";
import {MARKET_CONTRACT_ID} from "../../enviroment/contract-names";

const isIPFS = require('is-ipfs')

function getRealUrl(url: string, urlHash?: string, contractId?: string) {
    let storageLink = 'https://ipfs.fleek.co/ipfs/';

    if (contractId && contractId.endsWith('mintbase1.near')) {
        storageLink = 'https://arweave.net/';
    }

    if (url) {
        if (url.startsWith("http")) {
            return url;
        } else {
            return storageLink + url;
        }
    }
    if (urlHash && isIPFS.cid(urlHash)) {
        return storageLink + urlHash;
    }
    return null
}

export const getMintText = (status: string) => {
    switch (status) {
        case ContractVerificationStatus.Unverified:
            return "Unverified"
        case ContractVerificationStatus.NotSupported:
            return "Not supported"
        default:
            return `Minted on ${status}`
    }
}

// Input example:
//
// token_id: '56178:34',
// owner_id: 'turk.near',
// metadata: {
//   title: 'Scent of a Cloud #34',
//   description: null,
//   media: 'bafybeidotqecqjq37mab2o4tlqevevpn5kgjhgeblj7zlscxt6g2rxrkau',
//   media_hash: null,
//   copies: 111,
//   issued_at: '1638389142491715689',
//   expires_at: null,
//   starts_at: null,
//   updated_at: null,
//   extra: null,
//   reference: 'bafybeicq6hg6azxaymzay7bi3cu2ozjcd7fclmqy56dzg5o5nttuzaklka',
//   reference_hash: null
// },
// approved_account_ids: {}
function convertStandardNFT(contractId: string, nft: any, tokenPrices: TokenPrices): Promise<Nft> {
    const metadata = nft.metadata;
    const {approved_account_ids = {}} = nft
    const media = getRealUrl(metadata.media, metadata.media_hash, contractId);
    if (!media) {
        return Promise.reject("Standard NFT has no media URL")
    }

    const uid = buildUID(contractId, nft.token_id)
    return Promise.resolve({
        contractId,
        tokenId: nft.token_id || nft.id,
        ownerId: nft.owner_id,
        title: metadata.title,
        description: metadata.description,
        copies: metadata.copies,
        media,
        ipfsReference: getRealUrl(metadata.reference, metadata.reference_hash, contractId),
        mintedInfo: getNftMintedSiteInfo(nft, contractId),
        price: getPrice(uid, tokenPrices),
        isApproved: !!approved_account_ids[MARKET_CONTRACT_ID]
    })
}


export async function mapTokenToNFT(contractId: ContractId, token: Token) {
    const price = await marketAPI.fetchTokenPrice(contractId, token.token_id)
    const uid = buildUID(contractId, token.token_id)
    const wrappedPrice = {[uid]: price}
    return getConvertedNFT(contractId, token, wrappedPrice)
}

// nfts example
// id: 68,
// owner_id: { Account: 'turk.near' },
// approvals: {},
// metadata: {
//   title: null,
//   description: null,
//   media: null,
//   media_hash: null,
//   copies: 5,
//   issued_at: null,
//   expires_at: null,
//   starts_at: null,
//   updated_at: null,
//   extra: null,
//   reference: 'MIILJWlP432tEAhhhXTDwGeEMM35XxOmDKy2YFRy96Y',
//   reference_hash: null
// },
// royalty: { split_between: [Object], percentage: [Object] },
// split_owners: null,
// minter: 'kiora.near',
// loan: null,
// composeable_stats: { local_depth: 0, cross_contract_children: 0 },
// origin_key: null
// -----------------------------------------
// JSON example:
// category: 'membership',
// description: 'This token represents Proof of Attendance (PoA) for a single NEAR account at the MetaBUIDL Open House. The bearer of this token was one of the first 100 accounts that registered for the event.',
// copies: 10,
// media_hash: 'Zty1W1Xe8pp3sO6nBjJNIGgOfFV2E_xm25Hfm3rb1Dk',
// lock: null,
// visibility: 'safe',
// youtube_url: null,
// animation_url: null,
// animation_hash: null,
// document: null,
// document_hash: null,
// royalty: null,
// royalty_perc: 0.1,
// split_revenue: null,
// tags: [ 'nearedu', 'metabuidl', 'hackathon', 'metaverse' ],
// media: 'https://arweave.net/Zty1W1Xe8pp3sO6nBjJNIGgOfFV2E_xm25Hfm3rb1Dk',
// extra: [
// {
//   trait_type: 'Start Date',
//   value: 1630521000,
//   display_type: 'date'
// },
// { trait_type: 'End Date', value: 1630521000, display_type: 'date' },
// { trait_type: 'website', value: 'https://near.university/' }
// ],
// title: 'NEAR University Metaverse',
// store: 'nuniversity.mintbase1.near',
// external_url: 'https://near.university/',
// type: 'NEP171'
async function getMintbaseNFT(contractId: string, nft: any, tokenPrices: TokenPrices): Promise<Nft> {
    const metadata = nft.metadata;
    const url = await viewFunction({
            contractId,
            methodName: 'nft_token_uri',
            args: {
                token_id: nft.id.toString()
            }
        }
    )

    console.log(getRealUrl(nft.metadata.reference, nft.metadata.reference_hash, contractId))

    const jsonNFT = await NftAPI.getJsonByURL(url)
    const media = getRealUrl(jsonNFT.media, jsonNFT.media_hash, contractId)
    const {approvals = {}} = nft
    if (!media) {
        return Promise.reject("Mintbase NFT has no media URL")
    }
    const uid = buildUID(contractId, nft.id.toString())
    return Promise.resolve({
        contractId,
        tokenId: nft.id.toString(),
        ownerId: nft.owner_id.Account,
        title: jsonNFT.title,
        description: jsonNFT.description,
        copies: metadata.copies,
        media: media,
        ipfsReference: getRealUrl(nft.metadata.reference, nft.metadata.reference_hash, contractId),
        mintedInfo: getNftMintedSiteInfo(nft, contractId),
        price: getPrice(uid, tokenPrices),
        isApproved: !!approvals[MARKET_CONTRACT_ID]
    })
}

export async function getConvertedNFT(contractId: string, jsonNft: any, tokenPrices: TokenPrices) {
    if (contractId.endsWith('mintbase1.near')) {
        return getMintbaseNFT(contractId, jsonNft, tokenPrices)
    }
    return convertStandardNFT(contractId, jsonNft, tokenPrices)
}