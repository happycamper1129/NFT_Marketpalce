import {AppDispatch} from "../../store";
import {exploreNftsSlice} from "./slice";
import {getMarketNfts} from "../../../business-logic/near/get-nfts-market";

export const fetchMarketNfts = (accountId: number, from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreNftsSlice.actions.startFetching())
        getMarketNfts(accountId, from, limit)
            .then(nfts => {
                    nfts.map(nftPromise =>
                        nftPromise
                            .then(nft => dispatch(exploreNftsSlice.actions.addNft(nft)))
                            .catch(() => console.log('NFT not found'))
                    )
                    dispatch(exploreNftsSlice.actions.success())
                }
            )
            .catch(() => dispatch(exploreNftsSlice.actions.failure()))
            .finally(() => dispatch(exploreNftsSlice.actions.success()))
    }