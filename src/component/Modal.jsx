import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { UserContext } from "../store/userProgress";


const Modal = ({children,open}) =>{

    const userctx = useContext(UserContext);

    //console.log(children)

    const dialog = useRef();

   //dialog.current.showModal();
    useEffect(()=>{

        if(open){
            //console.log("hhhiiii");
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }

    },[open])

    return createPortal(<dialog ref={dialog} className="modal">{children}</dialog>,document.getElementById('modal'));
}

export default Modal;