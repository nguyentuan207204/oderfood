import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({})
    const addToCart=(itemId)=>{
        if (!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmout=()=>{
        let totalAmount=0;
        for (const item in cartItem){
            if (cartItem[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo
            }
        }
        return totalAmount;

    }
    
    const conTextValue={
      food_list,
      cartItem,
      setCartItem,
      addToCart,
      removeFromCart,
      getTotalCartAmout,
    }
    return(
        <StoreContext.Provider value={conTextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider