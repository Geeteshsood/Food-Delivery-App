import React,{useContext} from 'react'
import CartContext from '../../store/CartContext';

function CartItem(props) {

 const {item} = props;
 const cartCtx = useContext(CartContext);

  function onIncrease(){
      cartCtx.addItem(item);
  }

  function onDecrease(){
      cartCtx.removeItem(item);
  }


  return (
    <li className='cart-item'>
      <p>
     {item.name} - {item.quantity} x {item.price}
      </p>
      <p className='cart-item-actions'>
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  )
}

export default CartItem
