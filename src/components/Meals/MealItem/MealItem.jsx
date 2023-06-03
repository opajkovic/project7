import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MialItem.module.css';

const MealItem = ({meal}) => {
    const price = `$${meal.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes.meal}>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>  
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem
