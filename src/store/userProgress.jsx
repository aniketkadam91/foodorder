import { createContext, useState } from "react";

export const UserContext = createContext({
    progress: '',
    showCart : () =>{},
    hideCart : () => {},
    showChekout : () =>{},
    hideCheckout : () => {}
})


export default function UserProgressProvider({children}) {

    const [userProgress,setUserProgress] = useState(false);


    const showCart = () =>{
        //console.log("in show cart")
        setUserProgress(true);
    }

    const hideCart = () =>{
        //console.log("hide cart")
        setUserProgress(false);
        //console.log(userProgress);
    }

    const showCheckout = () =>{

    }

    const hideCheckout = () =>{

    }

    const ctx = {
        progress : userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    console.log(ctx)

    return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>


}