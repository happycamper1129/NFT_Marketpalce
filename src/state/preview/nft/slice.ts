import {NFT} from "../../../business-logic/models/NFT";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface PreviewNftState {
    nft: NFT | null,
    payouts: Array<any>,
    fetching: boolean,
    success: boolean | null
}

const initialState: PreviewNftState = {
    nft: null,
    payouts: [],
    fetching: true,
    success: null,
}

export const previewNftSlice = createSlice({
    name: "preview-nft",
    initialState,
    reducers: {
        startFetching: (state) => {
            state.fetching = true
        },
        success: (state, action: PayloadAction<NFT>) => {
            state.nft = action.payload
            state.success = true
            state.fetching = false
        },
        fetchPayouts: (state, action) => {
            state.payouts = Object.entries(action.payload).map(kv => {
                const [name, royalty] = kv
                return {name, value: `${royalty}%`}
            })
        },
        failure: (state) => {
            state.nft = null
            state.success = false
            state.fetching = false
        },
        reset: () => initialState
    }
})

export const previewNftReducer = previewNftSlice.reducer