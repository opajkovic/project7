import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnAnimated, setBtnAnimated] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNum, item) => { return curNum + item.amount }, 0);

  useEffect(() => {
    if (items.length === 0) { return; }
    setBtnAnimated(true);

    const timer = setTimeout(() => { setBtnAnimated(false) }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ''} `;

  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;
