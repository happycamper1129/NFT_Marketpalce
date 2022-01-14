import {AccountId, ContractId} from "../../../models/types";
import {QueryResponseKind} from "near-api-js/lib/providers/provider";
import {JsonRpcProvider} from "near-api-js/lib/providers";
import {contractAccordance} from "./parser/methods";
import {parseContract} from "./parser/lib";


interface ViewCode extends QueryResponseKind {
    code_base64: string
}


export const contractAPI = {
    /**
     * Fetches all NFT stores (contracts) for given users.
     *
     * @param accountId NEAR valid account
     */
    fetchUserTokenContracts: (accountId: AccountId): Promise<ContractId[]> =>
        fetch(`https://helper.mainnet.near.org/account/${accountId}/likelyNFts`)
            .then(response => response.json())
            .catch(() => []),

    /**
     * Extracts exported functions from NEAR smart contract
     *
     * @param contractId NEAR contract
     */
    viewMethods: (contractId: ContractId) =>
        new JsonRpcProvider('https://rpc.mainnet.near.org/')
            .query<ViewCode>({
                account_id: contractId,
                finality: 'final',
                request_type: 'view_code'
            })
            .then(response => contractAccordance(parseContract(response.code_base64)))
}