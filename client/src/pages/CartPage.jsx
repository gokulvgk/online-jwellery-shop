import CartList from '../components/CartList';
import Header from '../components/Header';
import CartHeader from '../components/CartHeader';
import BuyButton from '../components/BuyButton';
import {useContext} from 'react';
import { cartContext } from '../contexts/CartProvider';
import BillAmount from '../components/BillAmount';
export default function CartPage() {
    const {cartItems} = useContext(cartContext);
    let cartItemsCount = Object.keys(cartItems).length
    return (
        <div>
            <Header title="Your Cart" />
            <br />
            {cartItemsCount!==0 && <CartHeader/>}
            <CartList/>
            {cartItemsCount!==0 && <BillAmount/>}
            {cartItemsCount === 0 &&  <p style={
                {textAlign:'center',position:'fixed',top:'45%',left:'35%',fontSize: '3rem'}
                }>Your cart is empty ☹️ <br /> Buy something</p>}
        </div>
    );
}