import { useContext } from "react";
import Modal from '../UI/Modal';
import CartContext from "../../store/CartContext";
import Button from "../UI/Button";
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from './CartItem';

function Cart() {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  let cartTotal = 0;

  for(const item of cartCtx.items){
     cartTotal += item.quantity * item.price;
  }

  function handleCloseCart(){
    userProgressCtx.hideCart();
  }

  function handleShowCheckout(){
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className = "cart" open = {userProgressCtx.progress === 'cart'} onClose = {userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
            <CartItem key = {item.id} item = {item}/>
       ))}
      </ul>
      <p className="cart-total">{cartTotal}</p>
      <p className="modal-actions">
          <Button onClick = {handleCloseCart} isText>Close</Button>
          {cartCtx.items.length > 0 && (<Button onClick = {handleShowCheckout} >Go to Checkout</Button>)}
      </p>
    </Modal>
  );
}

export default Cart
