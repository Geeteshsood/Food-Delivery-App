import React , {createContext, useReducer} from "react";

const CartContext = createContext({
      items : [],
      addItem : (item) => {},
      removeItem : (id) =>{}
});

function cartReducer(state , action){

    const existingCartItemIndex = state.items.findIndex(
        (itm) => itm.id === action.item.id
   );

    const updatedItems = [...state.items];

     if(action.type === 'ADD_ITEM'){
       
        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];

            const updatedItem = {
                ...existingItem,
                quantity : existingItem.quantity + 1
            };

            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedItems.push({...action.item,quantity : 1});
        }
 
        return {...state,items:updatedItems};
     }

     if(action.type === 'REMOVE_ITEM'){

        const existingItem = state.items[existingCartItemIndex];

        if(existingItem.quantity === 1){
            updatedItems.splice(existingCartItemIndex,1);
        }
        else{
            const updatedItem = {
            ...existingItem,
             quantity : existingItem.quantity - 1
            };

            updatedItems[existingCartItemIndex] = updatedItem;

        }
        return {...state,items : updatedItems};
     }

     return state;
}

export function CartContextProvider(props){

        const [cart,dispatchCartAction] = useReducer(cartReducer,{items : []});

        function addItem(item){
           dispatchCartAction({type : 'ADD_ITEM' , item});
        }

        function removeItem(item){
            dispatchCartAction({type : 'REMOVE_ITEM' , item});
         }

        const cartContext = {
            items : cart.items,
            addItem,
            removeItem
        }

        // console.log(cartContext);
        
        return(
            <CartContext.Provider value = {cartContext}>
                {props.children}
            </CartContext.Provider>

        );
}

export default CartContext;