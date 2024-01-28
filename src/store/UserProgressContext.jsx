import { createContext, useContext, useState } from "react";

const UserProgressContext = createContext({
    progress : '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider(props){

    const [userProgress , setuserProgress] = useState('');

    function showCart(){
        setuserProgress('cart');
    }

    function hideCart(){
        setuserProgress('');
    }

    function showCheckout(){
        setuserProgress('checkout');
    }

    function hideCheckout(){
        setuserProgress('');
    }

    const userProgressCtx = {
        progress : userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };

    return (
         <UserProgressContext.Provider value = {userProgressCtx}>
            {props.children}
         </UserProgressContext.Provider>
    );

}

export default UserProgressContext;