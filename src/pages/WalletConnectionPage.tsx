import React from 'react';
import NearConnectButton from "../components/Common/Buttons/NearConnectButton";

const WalletConnectionPage = () => {
    return (
        <div className="flex justify-center pt-[120px] font-archivo">
                <div className="flex flex-col items-center text-center gap-10">
                    <div className="space-y-1 px-4">
                        <div className="text-4xl font-bold w-full">
                            Sign in with your wallet first
                        </div>
                        <span className="w-full text-lg text-gray-600 mt-3">
                            Sign in with one of available wallet providers or create a new wallet.
                        </span>
                    </div>
                    <NearConnectButton/>
                </div>
        </div>
    );
};

export default WalletConnectionPage;