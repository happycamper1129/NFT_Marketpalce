import React, {memo, useMemo} from 'react';
import InputLabel from "../../Common/Forms/InputLabel";
import BaseListSelect from "../../Common/Forms/BaseListSelect";
import {Img} from "react-image";
import MjolLoader from "../../Common/Loaders/MjolLoader";
import {TSelectedItem} from "../Token/MintTokenForm";
import {Collection} from "../../../business-logic/models/collection";

interface TokenCollectionInputProps {
    collections: Collection[]
    selectedCollection: TSelectedItem,
    setSelectedCollection: React.Dispatch<React.SetStateAction<TSelectedItem>>
}


const TokenCollectionInput: React.FC<TokenCollectionInputProps> = ({
    collections,
    selectedCollection,
    setSelectedCollection
}) => {
    const options = useMemo(
        () => {
            if (collections.length === 0) {
                return []
            }
            const none: TSelectedItem[] = [{}]
            return none
                .concat(collections
                    .map(collection => ({
                        id: collection.collection_id,
                        name: collection.title,
                        reference: collection.reference,
                        icon: <Img src={collection.media}
                                   className="rounded-full w-[30px] max-h-[30px] object-contain"
                                   alt={collection.title}
                                   loader={<MjolLoader size={25}/>}
                        />
                    })))
        }, [collections])


    return (
        <div className="pb-12">
            <InputLabel label="Collection" description="NFT will be minted as part of your collection"/>
            <BaseListSelect items={options}
                            setSelected={setSelectedCollection}
                            selected={selectedCollection}
            />
        </div>
    );
};

export default memo(TokenCollectionInput);