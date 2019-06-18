// SET_ITEM_FILTERS
export const setCategoryFilters = (category = '') => ({
    type: 'SET_CATEGORY_FILTERS',
    category
});

// SET_COLOR_FILTERS
export const setColorFilters = (color = '') => ({
    type: 'SET_COLOR_FILTERS',
    color
});

// SET_PRICING_FILTERS
export const setPriceFilters = (priceRange = 0) => ({
    type: 'SET_PRICE_FILTERS',
    priceRange
});

// SORT_BY_FEATURED
export const sortByFeatured = () => ({
    type: 'SORT_BY_FEATURED'
});

// SORT_BY_PRICE
export const sortByPrice = () => ({
    type: 'SORT_BY_PRICE'
});

// SORT_BY_NEW
export const sortByNew = () => ({
    type: 'SORT_BY_NEW'
});