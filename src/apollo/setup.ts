import {ApolloClient, InMemoryCache} from "@apollo/client";
import {MarketIndexerEndpoint} from "./config";
import {offsetLimitPagination} from "./utils";

export const setupApolloClient = () => {
    const cache = setupCache()
    const uri = MarketIndexerEndpoint.BackupV2

    return new ApolloClient({
        uri,
        cache
    })
}

const setupCache = () => {
    return new InMemoryCache({
            typePolicies: {
                Contract: {
                    keyFields: ["id"]
                },
                Account: {
                    keyFields: ["id"]
                },
                Activity: {
                    keyFields: ["id"]
                },
                Collection: {
                    keyFields: ["id"]
                },
                MarketToken: {
                    keyFields: ["id"]
                },
                Query: {
                    fields: {
                        activities: {
                            ...offsetLimitPagination(["orderBy", "orderDirection", "where"])
                        },
                        collections: {
                            ...offsetLimitPagination(["where"])
                        },
                        collectionsSearch: {
                            ...offsetLimitPagination(["text"])
                        },
                        marketTokens: {
                            ...offsetLimitPagination(["orderBy", "orderDirection", "where"])
                        },
                        marketSearch: {
                            ...offsetLimitPagination(["text"])
                        }
                    },
                }
            },
        }
    )
}