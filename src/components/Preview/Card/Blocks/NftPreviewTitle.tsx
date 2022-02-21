import React from 'react';
import {ContractVerificationStatus} from "../../../../business-logic/models/contract";
import ResolveVerificationIcon from "../../../Common/Verification/Icons/ResolveVerificationIcon";

interface PropTypes {
    title: string,
    verification?: ContractVerificationStatus
}

const NftPreviewTitle = React.memo<PropTypes>(({title, verification}) => {
    return (
        <div className="inline-flex w-full items-center gap-2 font-black font-archivo text-black text-2xl">
            {title}
            <ResolveVerificationIcon verification={verification}
                                     iconProps={{size: 20}}/>
        </div>
    );
});

export default NftPreviewTitle;