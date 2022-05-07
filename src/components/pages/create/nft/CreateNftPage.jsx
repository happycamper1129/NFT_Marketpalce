import React, {useState} from 'react';
import {mintToCommonCollection} from "../../../../business-logic/near/api/nfts/mint";
import SingleLineContainer from "./upload/containers/SingleLineContainer";
import MultiLineContainer from "./upload/containers/MultiLineContainer";
import OptionInputContainer from "./upload/containers/OptionInputContainer";
import PropertyInput from "./upload/lines/PropertyInput";
import UploadFileInput from "./upload/UploadFileInput";
import {makeNftLink, storeNFT} from "../../../../business-logic/ipfs/upload";
import DarkBlueTitle from "../../../ui/text/DarkBlueTitle";
import RoundLoader from "../../../ui/loaders/RoundLoader";
import BlueShadowContainer from "../../../ui/shadow/BlueShadowContainer";
import {getAccountId, wallet} from "../../../../business-logic/near/enviroment/near";


const LineAlert = ({state, setState}) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{state}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     onClick={() => setState("")}>
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1
                    1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1
                    1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                </svg>
            </span>
        </div>
    )
};

const CreateNftPage = () => {
    const MIN_TITLE_LEN = 3;
    const MAX_TITLE_LEN = 30;
    const MAX_DESC_LEN = 120;
    const MIN_ROYALTY = 0;
    const MAX_ROYALTY = 50;
    const MIN_TRAITS_LEN = 1;
    const MAX_TRAITS_LEN = 20;


    let myCollections = [] //['Collection#1', 'Collection#2', 'Collection#3'];
    myCollections = ['None'].concat(myCollections);

    const [curCollection, setCurCollection] = useState('None');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [royalty, setRoyalty] = useState(0);
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [alertText, setAlertText] = useState("");


    const [propertiesNum, setPropertiesNum] = useState([1]);
    const [fetchProperties, setFetchProperties] = useState(false);
    const addProperty = () => {
        setPropertiesNum(propertiesNum.concat(propertiesNum[propertiesNum.length - 1] + 1));
        setFetchProperties(!fetchProperties);
    };
    const delProperty = () => {
        if (propertiesNum.length !== 1) {
            const tmpNum = propertiesNum;
            tmpNum.pop();
            setPropertiesNum(tmpNum);
            setFetchProperties(!fetchProperties);
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        setAlertText("");
        if (!wallet.isSignedIn()) {
            return
        }
        if (!(title.length <= MAX_TITLE_LEN && title.length >= MIN_TITLE_LEN)) {
            setAlertText(`Title length must be between ${MIN_TITLE_LEN} and ${MAX_TITLE_LEN} characters`);
            return
        }
        if (!(description.length <= MAX_DESC_LEN)) {
            setAlertText(`Description length must be less than ${MAX_DESC_LEN} characters`);
            return
        }
        if (!(royalty <= MAX_ROYALTY && royalty >= MIN_ROYALTY)) {
            setAlertText(`Royalty must be less than ${MAX_ROYALTY}`);
            return
        }
        if (file === null) {
            setAlertText(`Please upload your NFT file`);
            return
        }

        if (curCollection === 'None') {
            setIsLoading(true);
            storeNFT(title,
                description,
                file,
                {}).then(res => {
                console.log(res);
                const ipfsMedia = makeNftLink(res.data.image.href);
                const ipfsRef = makeNftLink(res.url);
                let token_metadata = {
                    title: title,
                    description: description,
                    media: ipfsMedia,
                    reference: ipfsRef,
                    copies: 1
                };
                let payout = null;
                if (royalty !== 0) {
                    payout = {
                        payout: {}
                    };
                    payout["payout"][getAccountId()] = (100 * royalty).toString();
                }
                mintToCommonCollection(token_metadata, payout);
                setIsLoading(false);
            }).catch((e) => {
                    setAlertText(`Error: Can't upload file to ipfs, try again or contact to our support`);
                    setIsLoading(false);
                    console.log(e);
                }
            )
        } else {
            setAlertText('Only common collection available now');
        }

    };


    return (
        <>
            {isLoading ? (
                <RoundLoader/>
            ) : (
                <div className="bg-mjol-white">
                    <div className="bg-white">
                        <BlueShadowContainer>
                            <div className="pb-10 px-4 space-y-8">
                                <DarkBlueTitle title="Create NFT"/>
                            </div>
                        </BlueShadowContainer>
                    </div>
                    <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6">
                        <form onSubmit={submitForm}>
                            <div className="shadow rounded-md overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 p-6">
                                    <SingleLineContainer name={'Title'}
                                                         required={true}
                                                         text={'My NFT'}
                                                         type={'text'}
                                                         minLength={MIN_TITLE_LEN}
                                                         maxLength={MAX_TITLE_LEN}
                                                         id={'mint-title'}
                                                         setState={setTitle}
                                    />
                                    <MultiLineContainer name={'Description'}
                                                        text={'Brief description for your NFT'}
                                                        maxLength={MAX_DESC_LEN}
                                                        rows={3}
                                                        id={'mint-desc'}
                                                        setState={setDescription}
                                    />
                                    <SingleLineContainer name={'Royalty'}
                                                         text={'Royalties on secondary sales(%), number from 0-50'}
                                                         type={'number'}
                                                         min={MIN_ROYALTY}
                                                         max={MAX_ROYALTY}
                                                         id={'mint-royalty'}
                                                         setState={setRoyalty}
                                    />
                                    <OptionInputContainer name={'Collection'}
                                                          myCollections={myCollections}
                                                          id={'mint-collection'}
                                                          curCollection={curCollection}
                                                          setCurCollection={setCurCollection}
                                    />
                                    {curCollection !== 'None' ? (
                                        <div className="grid grid-cols-6 gap-6">
                                            <label className="col-span-6 text-sm font-medium text-gray-700">
                                                Properties:
                                                <button
                                                    type="button"
                                                    onClick={addProperty}
                                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={delProperty}
                                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    -
                                                </button>
                                            </label>
                                            {propertiesNum.map(ind => (
                                                <>
                                                    <PropertyInput name={'Key #' + ind}
                                                                   type={'text'}
                                                                   minLength={MIN_TRAITS_LEN}
                                                                   maxLength={MAX_TRAITS_LEN}
                                                                   id={'mint-key-' + ind}
                                                    />
                                                    <PropertyInput name={'Value #' + ind}
                                                                   type={'text'}
                                                                   minLength={MIN_TRAITS_LEN}
                                                                   maxLength={MAX_TRAITS_LEN}
                                                                   id={'mint-value-' + ind}
                                                    />
                                                </>
                                            ))}
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    <UploadFileInput state={file} setState={setFile}/>
                                    {alertText !== "" ? (
                                        <LineAlert state={alertText} setState={setAlertText}/>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-6 font-bold text-lg hover:text-gray-900 font-large rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200 hover:from-green-200 hover:to-mjol-blue-base"
                                    >
                                        Mint
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }
        </>
    )
};

export default CreateNftPage;