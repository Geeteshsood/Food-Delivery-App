import React,{useContext} from 'react'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

export default function MealItem({item}) {

  const CartCtx = useContext(CartContext);

  function handleAddMealToCart(){
      CartCtx.addItem(item);
  }

  return (
    <li className='meal-item'>
        <article>
        <img src={`https://raw.githubusercontent.com/Geeteshsood/jsonhost/main/${item.image}`} alt={item.image} />
            <div>
                <h3>{item.name}</h3>
                <p className='meal-item-price'>{item.price}</p>
                <p className='meal-item-description'>{item.description}</p>
            </div>
            <p className='meal-item-actions'>
                <Button onClick = {handleAddMealToCart} isText = {true}>Add to Cart</Button>
            </p>
        </article>
         
    </li>
  )
}
