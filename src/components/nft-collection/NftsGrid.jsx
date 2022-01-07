import SmallNftLoader from "../ui/loaders/SmallNftLoader";
import NftCollectionContainer from "./NftCollectionContainer";
import NftItem from "../nft-item/NftItem";
import React from "react";

const NftsGrid = ({nfts, fetching}) => {
    const loaders = Array(12)
        .fill(0)
        .map((i, idx) =>
            <SmallNftLoader key={idx} width={300} height={450}/>
        )

    if (fetching) {
        return <NftCollectionContainer>{loaders}</NftCollectionContainer>
    }

    const nftItems = nfts.map(nft =>
        <NftItem key={nft.getKey()} nft={nft}/>
    )

    return (
        <div className="bg-mjol-white p-5 md:p-10">
            <NftCollectionContainer>
                {nftItems.length === 0
                    ? <div>No nfts found</div>
                    : nftItems
                }
            </NftCollectionContainer>
        </div>
    );
};

export default NftsGrid;
