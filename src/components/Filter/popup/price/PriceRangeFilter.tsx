import React, {memo, useState} from 'react';
import PopoverFilter from "../PopupFilter";
import NearBlackLogo from "../../../Icons/near/NearIcon";
import {Popover} from '@headlessui/react';
import {utils} from "near-api-js";
import {TokenPriceRange} from "../../../../graphql/types";
import BaseInput from "../../../../@ui/Forms/BaseInput";
import BlueButton from "../../../../@ui/Buttons/BlueButton";
import GrayButton from "../../../../@ui/Buttons/GrayButton";

interface RangeFilterProps {
    onApply: (range: TokenPriceRange) => void
    current: TokenPriceRange,
    onClear: () => void,
    disabled?: boolean
}

const PriceRangeFilter: React.FC<RangeFilterProps> = ({
    onApply,
    onClear,
    current,
    disabled
}) => {
    const [priceRange, setPriceRange] = useState<TokenPriceRange>(current)

    const setFrom = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPriceRange({...priceRange, from: e.target.value})

    const setTo = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPriceRange({...priceRange, to: e.target.value})

    return (
        <PopoverFilter name="Price range"
                       disabled={disabled}
                       icon={<NearBlackLogo size={12}/>}
        >
            <Popover.Panel className="flex flex-col items-center p-3 gap-4 w-[280px]">
                {props =>
                    <>
                        <div className="font-bold font-archivo text-left text-md text-gray-400 w-full"
                        >
                            Price
                        </div>
                        <div className="inline-flex max-w-[280px] justify-between gap-2">
                            <BaseInput placeholder="From"
                                       type="number"
                                       value={priceRange.from}
                                       onChange={setFrom}
                            />
                            <BaseInput placeholder="To"
                                       type="number"
                                       value={priceRange.to}
                                       onChange={setTo}
                            />
                        </div>
                        <div className="inline-flex text-sm gap-2 justify-between w-full items-stretch">
                            <GrayButton title="Clear"
                                        onClick={() => {
                                            props.close()
                                            setPriceRange({})
                                            onClear()
                                        }}
                            />
                            <BlueButton title="Apply"
                                        disabled={!priceRange.from && !priceRange.to}
                                        onClick={() => {
                                            const range = {
                                                from: utils.format.parseNearAmount(priceRange.from) || undefined,
                                                to: utils.format.parseNearAmount(priceRange.to) || undefined
                                            }
                                            props.close()
                                            onApply(range)
                                        }}
                            />
                        </div>
                    </>
                }
            </Popover.Panel>
        </PopoverFilter>
    );
};

export default memo(PriceRangeFilter);