import {Optional, StringAmount} from "../types/aliases";
import {ContractVerificationStatus} from "./contract";


export interface TokenCollectionMetadata {
    collectionId: string
    name: string
} 

export interface CoreToken {
    contractId: string,
    tokenId: string,
    ownerId: string,
    title: string,
    media?: Optional<string>,
    description?: Optional<string>,
    collection?: Optional<TokenCollectionMetadata>,
    price?: Optional<StringAmount>,
}

export interface TokenMintedInfo {
    mintedSiteName: string,
    mintedSiteLink: string,
    verification: ContractVerificationStatus
}

export interface TokenApproveInfo {
    isApproved: boolean
}

export interface TokensReferenceInfo {
    ipfsReference?: Optional<string>,
    copies?: Optional<number>
}

// Grid token contains all fields without reference and approval info
export type GridToken = Omit<CoreToken, 'ownerId'> & TokenMintedInfo

// Contains fields as metadata, price
export type Token = CoreToken & TokensReferenceInfo & TokenMintedInfo

// Contains all fields and approval status
export type ApprovedToken = Token & TokenApproveInfo