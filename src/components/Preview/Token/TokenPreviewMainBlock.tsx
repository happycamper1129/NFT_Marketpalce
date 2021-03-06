import React from 'react';
import TokenPayoutDetails from "./Blocks/TokenPayoutDetails";
import TokenMarketStatus from "./Blocks/TokenMarketStatus";
import TokenDetails from "./Blocks/TokenDetails";
import {TokenPreviewProps} from "./TokenPreviewProps";
import SharePopup from "../../Common/Share/SharePopup";
import TokenPreviewTitleCollection from "./Blocks/TokenPreviewTitleCollection";
import TokenPreviewOwnerContract from "./Blocks/TokenPreviewOwnerContract";
import {useFetchTokenCollection} from "../../../hooks/collection/useFetchTokenCollection";

const TokenPreviewMainBlock: React.FC<TokenPreviewProps> = ({
    token,
    contract,
    payouts
}) => {

    const collection = useFetchTokenCollection(token.contractId, token.extra)

    return (
        <div className="flex flex-col flex-grow-[4] flex-shrink-0 basis-0 gap-4">
            <TokenPreviewTitleCollection title={token.title}
                                         tokenId={token.tokenId}
                                         contractId={token.contractId}
                                         collection={collection}
            />
            <TokenPreviewOwnerContract ownerId={token.ownerId}
                                       contractId={token.contractId}
                                       mintSiteName={token.contractName}
                                       verification={contract?.verification}
            />
            <TokenMarketStatus token={token}
                               contract={contract}
                               payouts={payouts}
            />
            <TokenDetails contractId={token.contractId}
                          tokenId={token.tokenId}
                          ownerId={token.ownerId}
                          copies={token.copies}
                          ipfsReference={token.ipfsReference}
            />
            <TokenPayoutDetails payouts={payouts}/>
        </div>
    );
};

export default TokenPreviewMainBlock;