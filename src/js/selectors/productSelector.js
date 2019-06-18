import { createSelector } from 'reselect';

export const getCategoryFilter = (state) => state.filters.currCategory;
const getColorFilter = (state) => state.filters.currColor;
const getPriceRangeFilter = (state) => state.filters.currPriceRange;
const getSortFilter = (state) => state.filters.currSortBy;
export const getProducts = (state) => state.products.items;

// let filters = {
//     item: getCategoryFilter(),
//     color: getColorFilter(),
//     priceRange: getPriceRangeFilter(),
// };

// export const multiFilter = (arr: Object[], filters: Object) => {
//     const filterKeys = Object.keys(filters);
//     return arr.filter(eachObj => {
//       return filterKeys.every(eachKey => {
//         if (!filters[eachKey].length) {
//           return true; // passing an empty filter means that filter is ignored.
//         }
//         return filters[eachKey].includes(eachObj[eachKey]);
//       });
//     });
//   };



  export const productsWithCategory = createSelector(
    getProducts, getCategoryFilter, 
    (items, category) => {
        return items.filter(item => {
            if(category === '' || category === 'All'){
                return true; // passing an empty filter means that filter is ignored.
            }
            return item.color === category;
        });
    });

export const productsWithColor = createSelector(
    getProducts, getColorFilter, 
    (items, color) => {
        return items.filter(item => {
            if(color === '' || color === 'All'){
                return true; // passing an empty filter means that filter is ignored.
            }
            return item.color === color;
        });
    });

const getPriceRange = (range) => {
    switch(range){
        case '0-25':
            return [0,25];
        case '25-50':
            return [25,50];
        case '50-100':
            return [50-100];
        case '100-':
            return [100,10000]
        default:
            return [0,10000];
    }
}

export const productsWithinPriceRange = createSelector(
    getProducts, getPriceRangeFilter, 
    (items, priceRange) => {
        return items.filter(item => {
            if(priceRange === '' || priceRange === 'All'){
                return true; // passing an empty filter means that filter is ignored.
            }
            let pricesArr = getPriceRange(priceRange);
            return pricesArr[0] >= item.price && pricesArr[1] <= item.price;
        });
    });

export const productsWithMultiFilters = createSelector(
    productsWithCategory, productsWithColor, productsWithinPriceRange, 
    (itemsCat, itemsColor, itemsPriceRange) => {
        return itemsCat.filter( item => {
            for(var i=0; i<itemsColor.length; i++){
                if(JSON.stringify(item) === JSON.stringify(itemsColor[i]))
                    return true;
            }
            return false;
        }).filter( item => {
            for(var i=0; i<itemsPriceRange.length; i++){
                if(JSON.stringify(item) === JSON.stringify(itemsPriceRange[i]))
                    return true;
            }
            return false;
        });
});

