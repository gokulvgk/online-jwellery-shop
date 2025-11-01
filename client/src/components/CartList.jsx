import {cartContext} from '../contexts/CartProvider';
import { useContext } from 'react';
import CartItem from './CartItem';
export default function CartList() {
    const {cartItems} = useContext(cartContext);
    const itemNames = Object.keys(cartItems);
    return (
        <div style = {{marginBottom: '80px', backgroundColor: 'rgb(250, 250, 250)'}}>
            {itemNames.map(item =><CartItem  name = {item} key = {item} />)}
        </div>
    );
}