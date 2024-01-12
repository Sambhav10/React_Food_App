import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import UserProgessContext from '../store/UserProgressContext';

 export default function Header (){

   const cartCtx =  useContext(CartContext);

   const userProgressCtx =  useContext(UserProgessContext);

   const totalCartItems = cartCtx.items.reduce((totalCartItems, item) => {
            return totalCartItems + item.quantity;
   }, 0)


   function handleShowCart(){
    userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id='title'> 
            <img src= {logoImg} alt= "Logo Image "/>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly  onClick = {handleShowCart}>Cart {totalCartItems}</Button>
        </nav>

    </header>
 }