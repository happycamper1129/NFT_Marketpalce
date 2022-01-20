import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {grayGradient} from "../../utils/css-utils";

interface PropTypes {
    width?: number,
    height?: number
}

/**
 * Returns empty card list animated component
 */
const EmptyCardList: React.FC<PropTypes> = React.memo(({width = 150, height = 190}) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <div className="inline-flex place-items-end gap-4">
                <motion.div className="rounded-lg shadow-mjol-gray-xs"
                            style={{
                                width,
                                height,
                                background: grayGradient("left")
                            }}
                            initial={{
                                rotate: -3,
                            }}
                            animate={{
                                rotate: -10,
                            }}
                            transition={{
                                repeatType: "reverse",
                                duration: 1,
                                repeat: Infinity,
                            }}
                />
                <motion.div
                    className="rounded-lg shadow-mjol-gray-xs"
                    style={{
                        width: width * 0.7,
                        height: height * 0.7,
                        background: grayGradient("right")
                    }}
                    initial={{
                        rotate: 6,
                    }}
                    animate={{
                        rotate: 20,
                    }}
                    transition={{
                        repeatType: "reverse",
                        duration: 1,
                        repeat: Infinity
                    }}
                >
                </motion.div>
            </div>
            <div className="inline-flex gap-1 items-baseline text-sm">
                <div className="text-gray-600">
                    No items found. You can buy NFTs on
                </div>
                <Link to="/nfts" className="text-blue-600 font-black">
                    market
                </Link>
            </div>
        </div>
    );
});

export default EmptyCardList;