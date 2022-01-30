import Lottie from "react-lottie-player";
import lottieJson from "../../../resources/loading.json";
import React from "react";

const CreateLoader = () => {
    return (
        <div className="flex h-screen bg-light_white justify-center">
            <div className="my-auto">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{width: 200, height: 200}}
                />
            </div>
        </div>
    )
}

export default CreateLoader;