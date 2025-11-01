import { useContext, useMemo, useState } from "react";
import { cartContext } from "../contexts/CartProvider";
import ClosureModal from '../components/ClosureModal';

import BuyButton from "./BuyButton";

const maindiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid white',
    borderRadius: '12px',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.18)',
    backgroundColor: 'white',
    padding: '20px 15px',
    position: 'fixed',
    top: '250px',
    right: '80px',
};

export default function BillAmount() {
    const { cartItems } = useContext(cartContext);
    const [modal, setModal] = useState(false);

    let billAmount = useMemo(() => 
        {
            let total = 0;
            for (const item of Object.values(cartItems)) 
            {
                total += item.price * item.quantity;
            }
            return total; 
        }, [cartItems]);

    return (
        <div style ={maindiv}>
            <h1>Bill Amount</h1>
            <br />
            <h2>Rs. {billAmount}</h2>
            <BuyButton setModal = {setModal}/>
            {modal && <ClosureModal setModal = {setModal}/>}
        </div>
    );
}