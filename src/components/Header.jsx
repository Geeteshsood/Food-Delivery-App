import React,{useContext} from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header(){

     const CartCtx = useContext(CartContext);
     const userProgressCtx = useContext(UserProgressContext);

     function handleShowCart(){
        userProgressCtx.showCart();
     }

     let TotalLength = 0;

     for(const item of CartCtx.items){
            TotalLength += item.quantity;
     }

     return <header id="main-header">
        <div id="title">
            <img src={logoImg} />
            <h1 id = "food">Zwigato</h1>
        </div>
        <nav>
            <Button onClick = {handleShowCart} isText = {false}>Cart ({TotalLength})</Button>
        </nav>
     </header>

}