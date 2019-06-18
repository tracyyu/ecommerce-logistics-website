// ADD ITEM
const addItemToCart = (
    {
      image,
      name,
      price,
      id,
      quantity
    }
  ) => ({
    type: 'ADD_ITEM_TO_CART',
    product: {
      image,
      name,
      price,
      id,
      quantity
    }
  });
  
  // REMOVE ITEM
  const removeItemFromCart = (id) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    id
  });
  
  // EDIT ITEM
  const editItemFromCart = (id, updates) => ({
    type: 'EDIT_ITEM_FROM_CART',
    id,
    updates
  });
  
  // UPDATE CART TOTAL
  const addTotalQuantity = (quantity) => ({
    type: 'ADD_TOTAL_QUANTITY',
    quantity
  });

  const subtractTotalQuantity = (quantity) => ({
    type: 'SUBTRACT_TOTAL_QUANTITY',
    quantity
  });
  
  //UPDATE CART QUANTITY
  const addTotalAmount = (quantity, price) => ({
    type: 'ADD_TOTAL_AMOUNT',
    quantity,
    price
  });

  const subtractTotalAmount = (quantity, price) => ({
    type: 'SUBTRACT_TOTAL_AMOUNT',
    quantity,
    price
  });