import React, {useCallback, useState} from 'react';
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId, TokenPayouts} from "../../../../@types/Aliases";
import {unlistNft, updateNftPrice} from "../../../../near/transaction";
import InputPriceModal from "./sell/InputPriceModal";
import DarkBlueGradientButton from "../../../../@ui/Buttons/DarkBlueGradientButton";
import DarkCyanGradientButton from "../../../../@ui/Buttons/DarkCyanGradientButton";

interface TUnlistNftProps {
    tokenPrice?: Optional<string>
    tokenId: TokenId,
    contractId: ContractId,
    payouts: TokenPayouts,
    media?: Optional<string>
}

const UnlistNftContainer: React.FC<TUnlistNftProps> = ({
    tokenPrice,
    contractId,
    tokenId,
    payouts,
    media
}) => {

    const [isUnlisting, setIsUnlisting] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [visible, setVisible] = useState(false)

    const unlist = useCallback(() => {
        setIsUnlisting(true)
        return unlistNft(contractId, tokenId).finally(() => setIsUnlisting(false))
    }, [contractId, tokenId, unlistNft])

    const updatePrice = useCallback((price: string) => {
        setIsUpdating(true)
        return updateNftPrice(contractId, tokenId, price).finally(() => setIsUpdating(false))
    }, [contractId, tokenId, updateNftPrice])


    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <div className="flex flex-col lg:flex-row gap-2">
                <DarkBlueGradientButton title="Unlist NFT"
                                        onClick={unlist}
                                        isLoading={isUnlisting}
                                        disabled={isUpdating}
                />
                <DarkCyanGradientButton title="Update Price"
                                        onClick={() => setVisible(true)}
                                        isLoading={isUpdating}
                                        disabled={isUnlisting}
                />
                <InputPriceModal close={() => setVisible(false)}
                                 isOpen={visible}
                                 onClick={updatePrice}
                                 payouts={payouts}
                                 imgSrc={media}
                                 headerText="Update NFT price"
                />
            </div>
        </PriceContainer>
    )
};

export default UnlistNftContainer;