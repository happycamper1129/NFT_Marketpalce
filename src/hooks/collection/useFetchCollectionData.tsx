import {CollectionId, ContractId, Optional} from "../../business-logic/models/types";
import {CollectionInfo} from "../../business-logic/models/collection";
import {useEffect, useState} from "react";
import {collectionAPI} from "../../business-logic/near/api/collections";

export interface FetchCollectionDataHookResult {
    fetching: boolean
    collection?: Optional<CollectionInfo>
    supply?: number
}

export const useFetchCollectionData = (contractId: ContractId, collectionId: CollectionId) => {
    const [result, setResult] = useState<FetchCollectionDataHookResult>({
        fetching: true,
    })
    useEffect(() => {
        Promise.all([
                collectionAPI.fetchCollection(collectionId),
                collectionAPI.fetchTotalSupply(collectionId, contractId)
            ]
        ).then(response => {
            const [collection, supply] = response
            setResult({fetching: false, collection, supply})
        }).catch(() => {
            setResult({fetching: false})
        })
    }, [contractId, collectionId])

    return result
}