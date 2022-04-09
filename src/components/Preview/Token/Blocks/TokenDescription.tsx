import React from 'react';
import {Optional} from '../../../../business-logic/types/aliases';
import {MdDescription} from "react-icons/md";
import IconDisclosureButton from "../../../Common/Disclosure/IconDisclosureButton";

interface TTokenDescription {
    description?: Optional<string>
}

const TokenDescription: React.FC<TTokenDescription> = ({
    description
}) => {
    return (
        <IconDisclosureButton name="Description"
                              icon={<MdDescription/>}
                              defaultOpen={true}
        >
            <div className="font-archivo text-left">
                {description || "NFT has no description"}
            </div>
        </IconDisclosureButton>
    )
};

export default TokenDescription;