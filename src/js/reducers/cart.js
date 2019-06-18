const cartReducerDefaultState = {
  cartItems: [],
  cartBounce: false,
  totalItems: 0,
  totalAmount: 0
};

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_CART':
      let cartItem = [...state.cartItems];
      let index = cartItem.findIndex(x => x.id === action.product.id);
      if(index !== -1){
        cartItem[index].quantity = Number(cartItem[index].quantity) + Number(action.product.quantity);
        return {
          ...state,
          cartItems: [...cartItem]
        };
      }else{
        return {
          ...state,
          cartItems: [...state.cartItems, action.product] 
        };
      }
    case 'REMOVE_ITEM_FROM_CART':
      let filterCartProducts = state.cartItems.filter(({id}) => id !== action.id);
      return {
        ...state,
        cartItems: filterCartProducts
      };
    case 'ADD_TOTAL_QUANTITY':
      console.log("quantity added...");
      return {
        ...state,
        totalItems: Number(state.totalItems) + Number(action.quantity)
      }
    case 'SUBTRACT_TOTAL_QUANTITY':
      console.log("quantity subtracted...");
      if(state.totalItems - action.quantity > 0){
        return {
          ...state,
          totalItems: Number(state.totalItems) - Number(action.quantity)
        }
      }else{
        return {
          ...state,
          totalItems: 0
        }
      }
    case 'ADD_TOTAL_AMOUNT':
      console.log("total added...");
      return {
        ...state,
        totalAmount: Number(state.totalAmount) + Number(action.quantity * action.price)
      };
    case 'SUBTRACT_TOTAL_AMOUNT':
      console.log("total subtracted...");
      if(state.totalAmount - (action.quantity * action.price) > 0){
        return {
          ...state,
          totalAmount: Number(state.totalAmount) - Number(action.quantity * action.price)
        };
      }else{
        return {
          ...state,
          totalAmount: 0
        }
      }
    default:
      return state;
  }
};

export default cartReducer;




