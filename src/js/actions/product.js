export const addProduct = (
    {
        image,
        name,
        price,
        id,
        quantity
    }) => ({
    type: 'ADD_PRODUCT',
    product: {
        image,
        name,
        price,
        id,
        quantity
      }
});

export const setQuantity = (quantity) => ({
    type: 'SET_QUANTITY',
    quantity
});

export const incrementQuantity = () => ({
    type: 'INCREMENT_QUANTITY'
});

export const decrementQuantity = () => ({
    type: 'DECREMENT_QUANTITY'
});