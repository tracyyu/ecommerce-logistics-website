
const productReducerDefaultState = {
    products: [],
    quantity: 1
  };
  
const productReducer = (state = productReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            let newProduct = state.products.concat(action.product);
            return {
                ...state,
                products: newProduct 
            };
        case 'SET_QUANTITY':
            return state.products.map((product) => {
                return {
                    ...product, 
                    quantity: action.quantity
                }
            });
        case 'INCREMENT_QUANTITY':
            // return state.products.map((product) => {
            //     if(product.id === action.id){
            //     return {
            //         ...product, 
            //         quantity: product.quantity + 1
            //         };
            //     }else{
            //     return state;
            //     }
            // });
            return {
                ...state,
                quantity: Number(state.quantity) + 1
            }
        case 'DECREMENT_QUANTITY':
            // return state.products.map((product) => {
            //     if(product.id === action.id && product.quantity > 0){
            //         return {
            //             ...product, 
            //             quantity: product.quantity - 1
            //             };
            //         }else{
            //         return state;
            //         }
            //     });
            return {
                ...state,
                quantity: Number(state.quantity) - 1
            }
        default:
            return state;
    }
};
  
  export default productReducer;