import React from 'react';
import {Collection} from "../../business-logic/models/collection";
import SquareImageBlock from "../Card/Blocks/SquareImageBlock";
import {Link} from "react-router-dom";

interface PropTypes {
    collection: Collection
}

const CollectionCard: React.FC<PropTypes> = ({collection}) => {

    const previewLink = `/collections/${collection.collection_id}/items`

    return (
        <Link className="flex flex-col justify-start bg-white rounded-2xl
                      ring-1 ring-blue-300 select-none overflow-hidden
                      transform hover:shadow-mjol-blue-300-md hover:-translate-y-[1px]"
           to={previewLink}
        >
            <SquareImageBlock path={collection.media} objectFit="fill" className="bg-white rounded-2xl"/>
            <div className="flex flex-col p-1 justify-between w-full">
                <div className="font-black font-archivo text-2xl text-center">
                    {collection.title}
                </div>
                <div className="w-full space-y-1 px-2 pt-1">
                    <div
                        className="font-bold font-archivo text-sm opacity-80 text-center truncate"
                    >
                        {collection.desc.length === 0
                            ? "Collection has no description"
                            : collection.desc
                        }
                    </div>
                    <hr/>
                    <div className="w-full font-bold font-archivo text-right text-tiny-4 pr-2">
                        {collection.owner_id}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionCard;