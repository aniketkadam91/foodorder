import { createContext, useReducer } from "react";

export const CartContext = createContext({
    items:[],
    addItem: (item) =>{},
    removeItem: (id) =>{}
})

function cartReducer(state,action){
    if(action.type == 'ADD_ITEM'){
        console.log(state);
        const exestingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        console.log(exestingCartItemIndex)


        const updateItems = [...state.items];

        if(exestingCartItemIndex > -1){
            //const state.items[exestingCartItemIndex];
            const existingItem = state.items[exestingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity : existingItem.quantity + 1,
            };

            updateItems[exestingCartItemIndex] = updatedItem;


        }else{
            console.log(action)
            updateItems.push({...action.item, quantity : 1});
        }

        console.log(updateItems);

        return { ...state , items : updateItems };

    }

    if(action.type == 'REMOVE_ITEM'){
        console.log(action)
        const exestingCartItemIndex = state.items.findIndex(

            (item) => item.id === action.id

        );

        const exestingCartItem = state.items[exestingCartItemIndex];
        const updatedItems = [...state.items];

        if( exestingCartItem.quantity === 1 ){

            updatedItems.splice( exestingCartItemIndex , 1);

        }else{
            const updatedItem = {
                ...exestingCartItem,
                quantity: exestingCartItem.quantity - 1,
            }

            updatedItems[exestingCartItemIndex] = updatedItem;

            
        }

        // return { state , updatedItem }
        // return { state , items : updateItems }
        return { ...state , items : updatedItems }

        
    }

    return state;
}


export default function CartContextProvider({children}){

    // const [cartState,dispatchCartAction] =useState({
    //     items: [],
    // })

    // //console.log("hii");
    // const addItemToCartM = (meal_id) =>{
        
    //     updateCartState((prevState)=>{
    //         return{
    //             prevState,
    //             items: [...prevState.items,meal_id]
    //         }
    //     });
        
    // }

    const [cartState,dispatchCartAction] = useReducer(cartReducer,{ items: [] });

    

    function addItem(item){
        //console.log(item);
        dispatchCartAction({ type: 'ADD_ITEM', item: item});
    }

    function removeItem(id){
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id});
    }

    const ctxVal = {
        items: cartState.items,
        addItem,
        removeItem
    }

    console.log(ctxVal);

    return <CartContext.Provider value={ctxVal}>
        {children}
    </CartContext.Provider>
}