import {createContext, useState, useEffect, useMemo} from "react";
export const cartContext = createContext()
export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(() => {
    const saved = sessionStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : {};
  });

  const cartCount = useMemo(
    () => Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

    function deleteCartItem (name) {
        setCartItems(prev => {const afterDelete = {...prev}
        delete afterDelete[name];
        return afterDelete;
    });}

    function adjustItemQuantity(name, action) {       
        setCartItems(prev => {
            const item = prev[name];
            console.log(item);
            let updatedQuantity = item.quantity;
            if (action === 'increment') {
                updatedQuantity += 1;
            } 
            else if (action === 'decrement' && item.quantity > 1) {
                updatedQuantity -= 1;
            } 
            else {
                const afterDelete = {...prev}
                delete afterDelete[name];
                return afterDelete;
            }

            return {
                ...prev,
                [name]: { ...item, quantity: updatedQuantity },
            };
        });
    }

    return (
        <cartContext.Provider value={{cartItems,setCartItems,
         deleteCartItem, cartCount, adjustItemQuantity}}>
            {children}  
        </cartContext.Provider>
    );
}
