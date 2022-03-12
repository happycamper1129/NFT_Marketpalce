import React from 'react';
import {Route, Routes} from "react-router";
import LandingPage from "./pages/landing/LandingPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import CreateCollectionPage from "./pages/create/collection/CreateCollectionPage";
import CreateNftPage from "./pages/create/nft/CreateNftPage";
import ExploreCollectionsPage from "./pages/explore/collection/ExploreCollectionsPage";
import PreviewNftPage from "./pages/preview/nft/PreviewNftPage";
import ExploreNftsPage from "./pages/explore/nft/ExploreNftsPage";
import ProfileCollectionsPage from "./pages/profile/collections/ProfileCollectionsPage";
import ProfileNftsPage from "./pages/profile/nfts/ProfileNftsPage";
import PreviewCollectionPage from "./pages/preview/collection/PreviewCollectionPage";

const AppRouter = () => {
    return (
        <Routes>

            {/* Landing & auth block*/}
            <Route path="/" element={<LandingPage/>}/>

            {/* Nfts block */}
            <Route path="nfts" element={<ExploreNftsPage/>}/>
            <Route path="nfts/:contractId/:tokenId" element={<PreviewNftPage/>}/>

            {/* Collections block */}
            <Route path="collections" element={<ExploreCollectionsPage/>}/>
            <Route path="collections/:contractId/:collectionId/:filterTab" element={<PreviewCollectionPage/>}/>

            {/* Creation block */}
            <Route path="create-nft" element={<CreateNftPage/>}/>
            <Route path="create-collection" element={<CreateCollectionPage/>}/>

            {/* Profile block */}
            <Route path="profile/nfts" element={<ProfileNftsPage/>}/>
            <Route path="profile/collections" element={<ProfileCollectionsPage/>}/>

            {/* Not found block */}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;


