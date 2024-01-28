import React,{useContext} from 'react'
import Modal from './UI/Modal'
import UserProgressContext from '../store/UserProgressContext'
import CartContext from '../store/CartContext'
import Button from './UI/Button';
import Input from './UI/Input';


function Checkout() {

 const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext)

 let cartTotal = 0;

 for(const item of cartCtx.items){
    cartTotal += item.quantity * item.price;
 }

 function handleCloseCheckout(){
  userProgressCtx.hideCheckout();
}

  return (
    <Modal className = "crt" open = {userProgressCtx.progress === 'checkout'}  onClose = {userProgressCtx.progress === 'checkout' ? handleCloseCheckout : null}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount : {cartTotal}</p>
        <Input label = "Full Name" type='text' id = 'full-name'/>
        <Input label = 'E-mail Address' id = 'email' type = 'email'/>
        <Input label = 'Street' type = 'text' id = 'street'/>

        <div className='control-row'>
          <Input label = 'Postal Code' type = 'text' id = 'postal-code'/>
          <Input label = 'City' type = 'text' id = 'city'/>
        </div>

        <p className='modal-actions'>
          <Button type = "button" isText>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>

    </Modal>
  );
}

export default Checkout
