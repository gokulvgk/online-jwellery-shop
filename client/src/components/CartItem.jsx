import {cartContext} from '../contexts/CartProvider';
import { useContext } from 'react';
import styles from '../css/CartItem.module.css';
import AdjustQuantityButtons from './AdjustQuantityButtons';

export default function CartItem({name}) {
    const {cartItems, deleteCartItem} = useContext(cartContext);
    const item = cartItems[name];
    return (
        <div className={styles.mainContainer}>
            <div className = {styles.detail}>{name}</div>
            <div className = {styles.detail}>{item.price}</div>
            <div className = {styles.detail}>{item.quantity}</div>
            <div className = {styles.detail}>{item.price*item.quantity}</div>
            <AdjustQuantityButtons itemName={name}/>
            <button className={styles.btn} onClick={()=>deleteCartItem(name)}>X</button>
        </div>
    );
}