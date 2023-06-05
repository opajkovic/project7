import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const items = [{id:1,name:'pizza',price:25.6}]
    const cartItems = ( 
    <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
    </ul> 
    );
  return (
    <Modal>
      {cartItems}
     <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.5</span>
     </div>
     <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
};

export default Cart
