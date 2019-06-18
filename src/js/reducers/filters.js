export const filtersReducerDefaultState = {
    term: "",
    category: ["All","Home Decor", "Stationery", 
                "Floral Stick On", "Bag Accessory", 
                "Corsages", "Floral Embellishment",
                "Mulberry Paper Floral Brooch", "Gift Packaging",
                "Magnet", "Party Decor", "vegetabes", "nuts"],
    color: ["All", "White", "Black", 'Brown', "Blue", "Green", "Yellow", "Orange", "Red", "Purple", "Pink"],
    priceRange: ["All", '0-25', '25-50', '50-100', '100-'],
    sortBy: ['None', 'Featured','new','price'],
    currCategory: 'All',
    currColor: 'All',
    currPriceRange: 'All',
    currSortBy: 'none'
};


export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_CATEGORY_FILTERS':
            return {
                ...state,
                currCategory: action.category
            };
        case 'SET_COLOR_FILTERS':
            return {
                ...state,
                currColor: action.color
            };
        case 'SET_PRICING_FILTERS':
            return {
                ...state,
                priceRange: action.priceRange
            };
        case 'SORT_BY_FEATURED':
            return {
                ...state,
                sortBy: 'featured'
            };
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
            };
        case 'SORT_BY_NEW':
            return{
                ...state,
                sortBy: 'new'
            };
        default:
            return state;
    }
};