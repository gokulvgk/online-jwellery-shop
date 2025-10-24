import {createContext, useState} from "react";
export const cartContext = createContext()
export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState({});
    const [cartCount, setCartCount] = useState(0);
    const deleteCartItem = (name) => {
        setCartCount(count => count - cartItems[name].quantity);
        setCartItems(prev => {const afterDelete = {...prev}
            delete afterDelete[name];
            return afterDelete;
        });}
    return (
        <cartContext.Provider value={{cartItems,setCartItems, deleteCartItem, cartCount, setCartCount}}>
            {children}  
        </cartContext.Provider>
    );
}
