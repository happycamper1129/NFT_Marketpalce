import React from 'react';
import NavigationBar from "../ui/NavigationBar";
import UserNFT from "../../UserNFT";

const AllNft = () => {
    console.log("HERR")
    return (
        <div className="bg-light_white">
            <NavigationBar/>
            <UserNFT/>
        </div>
    );
};

export default AllNft;