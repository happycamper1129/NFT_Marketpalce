import {viewFunction} from "../rpc";
import {AccountId, ContractId, StringAmount, TokenId} from "../../../models/types";

export interface Payouts {
    payout: Record<AccountId, StringAmount>
}

export const nftAPI = {
    /**
     * Fetches information about NFT.
     * Currently, supports any type of responses.
     *
     * @param contractId NEAR contract where NFT is stored.
     * @param tokenId NFT token
     */
    fetchNft: (contractId: ContractId, tokenId: TokenId) =>
        viewFunction({
            contractId,
            methodName: 'nft_token',
            args: {
                token_id: tokenId
            }
        }),


    /**
     * Fetches user tokens.
     * @see [Non-Fungible Token Enumeration (NEP-181)]{@link https://nomicon.io/Standards/NonFungibleToken/Enumeration.html}
     *
     * @param contractId NEAR contract where NFT is stored.
     * @param accountId a valid NEAR account
     * @param limit the maximum number of tokens to return
     * @param from a string representing an unsigned 128-bit integer,
     * representing the starting index of tokens to return
     */
    fetchUserTokens: (
        contractId: ContractId,
        accountId: AccountId,
        limit: number = 20,
        from: number = 0
    ): Promise<any[]> =>
        viewFunction({
            contractId,
            methodName: 'nft_tokens_for_owner',
            args: {
                account_id: accountId,
                from_index: from.toString(),
                limit: limit
            }
        }),


    /**
     * Fetches standard NFT payouts.
     * @see [Standard for a Multiple-Recipient-Payout mechanic on NFT Contracts (NEP-199)]{@link https://nomicon.io/Standards/NonFungibleToken/Payout.html}
     *
     * @param contractId NEAR contract where NFT is stored.
     * @param tokenId NFT token
     */
    fetchTokenPayouts: (contractId: ContractId, tokenId: TokenId) =>
        viewFunction<Payouts>({
            contractId,
            methodName: 'nft_payout',
            args: {
                token_id: tokenId,
                balance: '100000000',
                max_len_payout: 10
            }
        }),

    fetchMintbaseNft: (url: string) => {

    }
}