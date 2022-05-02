import React, {useCallback, useState} from 'react';
import {TokenPriceRange, TokenSortName, tokenSortOptions} from "../../../graphql/types";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import {TokenSortFilter} from "../../../components/Filter/popup/sort/SortFilter";
import ProfileFilterMarketTokens from "./market/ProfileFilterMarketTokens";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import {CardSizeSwitcher} from "../../../context/CardSizeContext";


const ProfileMarketTokens: React.FC<TAuthProps> = ({
    accountId
}) => {
    const limit = 12

    const [priceRange, setPriceRange] = useState<TokenPriceRange>({})
    const clearPriceRange = useCallback(() => setPriceRange({}), [])
    const [sort, setSort] = useState(TokenSortName.RecentlyAdded)

    return (
        <>
            <div className="inline-flex flex-wrap gap-5 w-full justify-center mb-2">
                <PriceRangeFilter
                    disabled={false}
                    current={priceRange}
                    onClear={clearPriceRange}
                    onApply={setPriceRange}
                />
                <TokenSortFilter disabled={false}
                                 picked={sort}
                                 setSort={setSort}
                />
                <CardSizeSwitcher/>
            </div>
            <ProfileFilterMarketTokens accountId={accountId}
                                       limit={limit}
                                       priceRange={priceRange}
                                       sort={tokenSortOptions[sort]}
            />
        </>
    );
};

export default withAuthRedirect(withAuthData(ProfileMarketTokens));