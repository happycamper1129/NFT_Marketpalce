import {QueryResponseKind} from "near-api-js/lib/providers/provider";
import {JsonRpcProvider} from "near-api-js/lib/providers";
import {parseContract} from "./lib";

interface ViewCode extends QueryResponseKind {
    code_base64: string
}

/**
 * Extracts exported functions from smart contract
 *
 * @param contractId near contract id
 *
 * @returns Promise<ParsedContract>
 */
export const viewMethods = (contractId: string) =>
    new JsonRpcProvider('https://rpc.mainnet.near.org/')
        .query<ViewCode>({
            account_id: contractId,
            finality: 'final',
            request_type: 'view_code'
        })
        .then(response => parseContract(response.code_base64))