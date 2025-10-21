import CartList from '../components/CartList';
import Header from '../components/Header';
import BuyButton from '../components/buyButton';
import { useState } from 'react';
import ClosureModal from '../components/ClosureModal';
import {useContext} from 'react';
import { cartContext } from '../contexts/CartProvider';
export default function CartPage() {
    const {cartItems} = useContext(cartContext);
    const [modal, setModal] = useState(false);
    let cartItemsCount = Object.keys(cartItems).length
    return (
        <div>
            <Header title="Your Cart" />
            <CartList/>
            {cartItemsCount!==0 && <BuyButton setModal = {setModal}/>}
            {modal && <ClosureModal setModal = {setModal}/>}
        </div>
    );
}