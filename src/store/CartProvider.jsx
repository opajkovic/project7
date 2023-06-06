import React,{useReducer} from 'react';
import CartContext from './cartContext';

const defaultCartState={items:[], totalAmount:0}
const cartReduser = (state,action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState,dispatchCartAction] = useReducer(cartReduser,defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'ADD',item:item})
  }
 
  const deleteItemFromCartHandler = (id) => {
    dispatchCartAction({type:'DELETE',id:id})
  }

  const cartContext = {
    items:cartState.items,
    totalAmound:cartState.totalAmount,
    addItem:addItemToCartHandler,
    deleteItem:deleteItemFromCartHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
