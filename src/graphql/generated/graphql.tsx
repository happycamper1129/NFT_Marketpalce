import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type History = {
  __typename?: 'History';
  buyerId?: Maybe<Scalars['String']>;
  eventType: HistoryEventType;
  id: Scalars['ID'];
  ownerId: Scalars['String'];
  price?: Maybe<Scalars['BigInt']>;
  timestamp: Scalars['BigInt'];
  token: SavedToken;
  txHash: Scalars['String'];
};

export enum HistoryEventType {
  Buy = 'Buy',
  List = 'List',
  Unlist = 'Unlist'
}

export type History_Filter = {
  buyerId?: InputMaybe<Scalars['String']>;
  buyerId_contains?: InputMaybe<Scalars['String']>;
  buyerId_ends_with?: InputMaybe<Scalars['String']>;
  buyerId_gt?: InputMaybe<Scalars['String']>;
  buyerId_gte?: InputMaybe<Scalars['String']>;
  buyerId_in?: InputMaybe<Array<Scalars['String']>>;
  buyerId_lt?: InputMaybe<Scalars['String']>;
  buyerId_lte?: InputMaybe<Scalars['String']>;
  buyerId_not?: InputMaybe<Scalars['String']>;
  buyerId_not_contains?: InputMaybe<Scalars['String']>;
  buyerId_not_ends_with?: InputMaybe<Scalars['String']>;
  buyerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  buyerId_not_starts_with?: InputMaybe<Scalars['String']>;
  buyerId_starts_with?: InputMaybe<Scalars['String']>;
  eventType?: InputMaybe<HistoryEventType>;
  eventType_in?: InputMaybe<Array<HistoryEventType>>;
  eventType_not?: InputMaybe<HistoryEventType>;
  eventType_not_in?: InputMaybe<Array<HistoryEventType>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
};

export enum History_OrderBy {
  BuyerId = 'buyerId',
  EventType = 'eventType',
  Id = 'id',
  OwnerId = 'ownerId',
  Price = 'price',
  Timestamp = 'timestamp',
  Token = 'token',
  TxHash = 'txHash'
}

export type MarketToken = {
  __typename?: 'MarketToken';
  contractId: Scalars['String'];
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipfsReference?: Maybe<Scalars['String']>;
  listingTime: Scalars['BigInt'];
  media?: Maybe<Scalars['String']>;
  mintSiteLink?: Maybe<Scalars['String']>;
  mintSiteName?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
  price: Scalars['BigInt'];
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type MarketToken_Filter = {
  contractId?: InputMaybe<Scalars['String']>;
  contractId_contains?: InputMaybe<Scalars['String']>;
  contractId_ends_with?: InputMaybe<Scalars['String']>;
  contractId_gt?: InputMaybe<Scalars['String']>;
  contractId_gte?: InputMaybe<Scalars['String']>;
  contractId_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_lt?: InputMaybe<Scalars['String']>;
  contractId_lte?: InputMaybe<Scalars['String']>;
  contractId_not?: InputMaybe<Scalars['String']>;
  contractId_not_contains?: InputMaybe<Scalars['String']>;
  contractId_not_ends_with?: InputMaybe<Scalars['String']>;
  contractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_not_starts_with?: InputMaybe<Scalars['String']>;
  contractId_starts_with?: InputMaybe<Scalars['String']>;
  copies?: InputMaybe<Scalars['BigInt']>;
  copies_gt?: InputMaybe<Scalars['BigInt']>;
  copies_gte?: InputMaybe<Scalars['BigInt']>;
  copies_in?: InputMaybe<Array<Scalars['BigInt']>>;
  copies_lt?: InputMaybe<Scalars['BigInt']>;
  copies_lte?: InputMaybe<Scalars['BigInt']>;
  copies_not?: InputMaybe<Scalars['BigInt']>;
  copies_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsReference?: InputMaybe<Scalars['String']>;
  ipfsReference_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_gt?: InputMaybe<Scalars['String']>;
  ipfsReference_gte?: InputMaybe<Scalars['String']>;
  ipfsReference_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_lt?: InputMaybe<Scalars['String']>;
  ipfsReference_lte?: InputMaybe<Scalars['String']>;
  ipfsReference_not?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with?: InputMaybe<Scalars['String']>;
  listingTime?: InputMaybe<Scalars['BigInt']>;
  listingTime_gt?: InputMaybe<Scalars['BigInt']>;
  listingTime_gte?: InputMaybe<Scalars['BigInt']>;
  listingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listingTime_lt?: InputMaybe<Scalars['BigInt']>;
  listingTime_lte?: InputMaybe<Scalars['BigInt']>;
  listingTime_not?: InputMaybe<Scalars['BigInt']>;
  listingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink?: InputMaybe<Scalars['String']>;
  mintSiteLink_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_gt?: InputMaybe<Scalars['String']>;
  mintSiteLink_gte?: InputMaybe<Scalars['String']>;
  mintSiteLink_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_lt?: InputMaybe<Scalars['String']>;
  mintSiteLink_lte?: InputMaybe<Scalars['String']>;
  mintSiteLink_not?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName?: InputMaybe<Scalars['String']>;
  mintSiteName_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_gt?: InputMaybe<Scalars['String']>;
  mintSiteName_gte?: InputMaybe<Scalars['String']>;
  mintSiteName_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_lt?: InputMaybe<Scalars['String']>;
  mintSiteName_lte?: InputMaybe<Scalars['String']>;
  mintSiteName_not?: InputMaybe<Scalars['String']>;
  mintSiteName_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName_starts_with?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum MarketToken_OrderBy {
  ContractId = 'contractId',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  IpfsReference = 'ipfsReference',
  ListingTime = 'listingTime',
  Media = 'media',
  MintSiteLink = 'mintSiteLink',
  MintSiteName = 'mintSiteName',
  OwnerId = 'ownerId',
  Price = 'price',
  Title = 'title',
  TokenId = 'tokenId'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  histories: Array<History>;
  history?: Maybe<History>;
  marketSearch: Array<MarketToken>;
  marketToken?: Maybe<MarketToken>;
  marketTokens: Array<MarketToken>;
  savedToken?: Maybe<SavedToken>;
  savedTokens: Array<SavedToken>;
  user?: Maybe<User>;
  userSearch: Array<User>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<History_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<History_Filter>;
};


export type QueryHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryMarketTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketToken_Filter>;
};


export type QuerySavedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySavedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SavedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SavedToken_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SavedToken = {
  __typename?: 'SavedToken';
  contractId: Scalars['String'];
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipfsReference?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  mintSiteLink?: Maybe<Scalars['String']>;
  mintSiteName?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type SavedToken_Filter = {
  contractId?: InputMaybe<Scalars['String']>;
  contractId_contains?: InputMaybe<Scalars['String']>;
  contractId_ends_with?: InputMaybe<Scalars['String']>;
  contractId_gt?: InputMaybe<Scalars['String']>;
  contractId_gte?: InputMaybe<Scalars['String']>;
  contractId_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_lt?: InputMaybe<Scalars['String']>;
  contractId_lte?: InputMaybe<Scalars['String']>;
  contractId_not?: InputMaybe<Scalars['String']>;
  contractId_not_contains?: InputMaybe<Scalars['String']>;
  contractId_not_ends_with?: InputMaybe<Scalars['String']>;
  contractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_not_starts_with?: InputMaybe<Scalars['String']>;
  contractId_starts_with?: InputMaybe<Scalars['String']>;
  copies?: InputMaybe<Scalars['BigInt']>;
  copies_gt?: InputMaybe<Scalars['BigInt']>;
  copies_gte?: InputMaybe<Scalars['BigInt']>;
  copies_in?: InputMaybe<Array<Scalars['BigInt']>>;
  copies_lt?: InputMaybe<Scalars['BigInt']>;
  copies_lte?: InputMaybe<Scalars['BigInt']>;
  copies_not?: InputMaybe<Scalars['BigInt']>;
  copies_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsReference?: InputMaybe<Scalars['String']>;
  ipfsReference_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_gt?: InputMaybe<Scalars['String']>;
  ipfsReference_gte?: InputMaybe<Scalars['String']>;
  ipfsReference_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_lt?: InputMaybe<Scalars['String']>;
  ipfsReference_lte?: InputMaybe<Scalars['String']>;
  ipfsReference_not?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink?: InputMaybe<Scalars['String']>;
  mintSiteLink_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_gt?: InputMaybe<Scalars['String']>;
  mintSiteLink_gte?: InputMaybe<Scalars['String']>;
  mintSiteLink_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_lt?: InputMaybe<Scalars['String']>;
  mintSiteLink_lte?: InputMaybe<Scalars['String']>;
  mintSiteLink_not?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName?: InputMaybe<Scalars['String']>;
  mintSiteName_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_gt?: InputMaybe<Scalars['String']>;
  mintSiteName_gte?: InputMaybe<Scalars['String']>;
  mintSiteName_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_lt?: InputMaybe<Scalars['String']>;
  mintSiteName_lte?: InputMaybe<Scalars['String']>;
  mintSiteName_not?: InputMaybe<Scalars['String']>;
  mintSiteName_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum SavedToken_OrderBy {
  ContractId = 'contractId',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  IpfsReference = 'ipfsReference',
  Media = 'media',
  MintSiteLink = 'mintSiteLink',
  MintSiteName = 'mintSiteName',
  Title = 'title',
  TokenId = 'tokenId'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  histories: Array<History>;
  history?: Maybe<History>;
  marketToken?: Maybe<MarketToken>;
  marketTokens: Array<MarketToken>;
  savedToken?: Maybe<SavedToken>;
  savedTokens: Array<SavedToken>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<History_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<History_Filter>;
};


export type SubscriptionHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketToken_Filter>;
};


export type SubscriptionSavedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSavedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SavedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SavedToken_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type User = {
  __typename?: 'User';
  earned: Scalars['BigDecimal'];
  id: Scalars['ID'];
  purchases: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  spent: Scalars['BigDecimal'];
};

export type User_Filter = {
  earned?: InputMaybe<Scalars['BigDecimal']>;
  earned_gt?: InputMaybe<Scalars['BigDecimal']>;
  earned_gte?: InputMaybe<Scalars['BigDecimal']>;
  earned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  earned_lt?: InputMaybe<Scalars['BigDecimal']>;
  earned_lte?: InputMaybe<Scalars['BigDecimal']>;
  earned_not?: InputMaybe<Scalars['BigDecimal']>;
  earned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  purchases?: InputMaybe<Scalars['BigInt']>;
  purchases_gt?: InputMaybe<Scalars['BigInt']>;
  purchases_gte?: InputMaybe<Scalars['BigInt']>;
  purchases_in?: InputMaybe<Array<Scalars['BigInt']>>;
  purchases_lt?: InputMaybe<Scalars['BigInt']>;
  purchases_lte?: InputMaybe<Scalars['BigInt']>;
  purchases_not?: InputMaybe<Scalars['BigInt']>;
  purchases_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spent?: InputMaybe<Scalars['BigDecimal']>;
  spent_gt?: InputMaybe<Scalars['BigDecimal']>;
  spent_gte?: InputMaybe<Scalars['BigDecimal']>;
  spent_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  spent_lt?: InputMaybe<Scalars['BigDecimal']>;
  spent_lte?: InputMaybe<Scalars['BigDecimal']>;
  spent_not?: InputMaybe<Scalars['BigDecimal']>;
  spent_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum User_OrderBy {
  Earned = 'earned',
  Id = 'id',
  Purchases = 'purchases',
  Sales = 'sales',
  Spent = 'spent'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type LastMarketTokensQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy: Token_OrderBy;
  orderDirection: OrderDirection;
}>;


export type LastMarketTokensQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', ownerId: string, tokenId: string, contractId: string, title: string, description?: string | null, media?: string | null, copies?: any | null, ipfsReference?: string | null, price: any }> };

export type MarketTokensQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
  priceFrom: Scalars['BigInt'];
  priceTo: Scalars['BigInt'];
}>;


export type MarketTokensQuery = { __typename?: 'Query', marketTokens: Array<{ __typename?: 'MarketToken', tokenId: string, contractId: string, ownerId: string, title: string, description?: string | null, media?: string | null, mintSiteName?: string | null, mintSiteLink?: string | null, price: any }> };

export type TokenActivityQueryVariables = Exact<{
  tokenUID: Scalars['String'];
}>;


export type TokenActivityQuery = { __typename?: 'Query', histories: Array<{ __typename?: 'History', ownerId: string, buyerId?: string | null, price?: any | null, txHash: string, eventType: HistoryEventType, timestamp: any }> };

export type MarketTokensSearchQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type MarketTokensSearchQuery = { __typename?: 'Query', marketSearch: Array<{ __typename?: 'MarketToken', ownerId: string, tokenId: string, contractId: string, title: string, description?: string | null, media?: string | null, copies?: any | null, ipfsReference?: string | null, price: any }> };


export const LastMarketTokensDocument = gql`
    query lastMarketTokens($first: Int!, $skip: Int!, $orderBy: Token_orderBy!, $orderDirection: OrderDirection!) {
  tokens(
    first: $first
    skip: $skip
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    ownerId
    tokenId
    contractId
    title
    description
    media
    copies
    ipfsReference
    price
  }
}
    `;

/**
 * __useLastMarketTokensQuery__
 *
 * To run a query within a React component, call `useLastMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastMarketTokensQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useLastMarketTokensQuery(baseOptions: Apollo.QueryHookOptions<LastMarketTokensQuery, LastMarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastMarketTokensQuery, LastMarketTokensQueryVariables>(LastMarketTokensDocument, options);
      }
export function useLastMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastMarketTokensQuery, LastMarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastMarketTokensQuery, LastMarketTokensQueryVariables>(LastMarketTokensDocument, options);
        }
export type LastMarketTokensQueryHookResult = ReturnType<typeof useLastMarketTokensQuery>;
export type LastMarketTokensLazyQueryHookResult = ReturnType<typeof useLastMarketTokensLazyQuery>;
export type LastMarketTokensQueryResult = Apollo.QueryResult<LastMarketTokensQuery, LastMarketTokensQueryVariables>;
export const MarketTokensDocument = gql`
    query marketTokens($limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt!, $priceTo: BigInt!) {
  marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    tokenId
    contractId
    ownerId
    title
    description
    media
    mintSiteName
    mintSiteLink
    price
  }
}
    `;

/**
 * __useMarketTokensQuery__
 *
 * To run a query within a React component, call `useMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketTokensQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      priceFrom: // value for 'priceFrom'
 *      priceTo: // value for 'priceTo'
 *   },
 * });
 */
export function useMarketTokensQuery(baseOptions: Apollo.QueryHookOptions<MarketTokensQuery, MarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketTokensQuery, MarketTokensQueryVariables>(MarketTokensDocument, options);
      }
export function useMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketTokensQuery, MarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketTokensQuery, MarketTokensQueryVariables>(MarketTokensDocument, options);
        }
export type MarketTokensQueryHookResult = ReturnType<typeof useMarketTokensQuery>;
export type MarketTokensLazyQueryHookResult = ReturnType<typeof useMarketTokensLazyQuery>;
export type MarketTokensQueryResult = Apollo.QueryResult<MarketTokensQuery, MarketTokensQueryVariables>;
export const TokenActivityDocument = gql`
    query tokenActivity($tokenUID: String!) {
  histories(where: {token: $tokenUID}, orderBy: timestamp, orderDirection: desc) {
    ownerId
    buyerId
    price
    txHash
    eventType
    timestamp
  }
}
    `;

/**
 * __useTokenActivityQuery__
 *
 * To run a query within a React component, call `useTokenActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenActivityQuery({
 *   variables: {
 *      tokenUID: // value for 'tokenUID'
 *   },
 * });
 */
export function useTokenActivityQuery(baseOptions: Apollo.QueryHookOptions<TokenActivityQuery, TokenActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenActivityQuery, TokenActivityQueryVariables>(TokenActivityDocument, options);
      }
export function useTokenActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenActivityQuery, TokenActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenActivityQuery, TokenActivityQueryVariables>(TokenActivityDocument, options);
        }
export type TokenActivityQueryHookResult = ReturnType<typeof useTokenActivityQuery>;
export type TokenActivityLazyQueryHookResult = ReturnType<typeof useTokenActivityLazyQuery>;
export type TokenActivityQueryResult = Apollo.QueryResult<TokenActivityQuery, TokenActivityQueryVariables>;
export const MarketTokensSearchDocument = gql`
    query marketTokensSearch($text: String!) {
  marketSearch(text: $text) {
    ownerId
    tokenId
    contractId
    title
    description
    media
    copies
    ipfsReference
    price
  }
}
    `;

/**
 * __useMarketTokensSearchQuery__
 *
 * To run a query within a React component, call `useMarketTokensSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketTokensSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketTokensSearchQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useMarketTokensSearchQuery(baseOptions: Apollo.QueryHookOptions<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>(MarketTokensSearchDocument, options);
      }
export function useMarketTokensSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>(MarketTokensSearchDocument, options);
        }
export type MarketTokensSearchQueryHookResult = ReturnType<typeof useMarketTokensSearchQuery>;
export type MarketTokensSearchLazyQueryHookResult = ReturnType<typeof useMarketTokensSearchLazyQuery>;
export type MarketTokensSearchQueryResult = Apollo.QueryResult<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>;