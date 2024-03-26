import { useContext, useEffect, useState } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './Button';
import { CartContext  } from '../store/cart-context';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { UserContext } from '../store/userProgress';

const Header= () =>{

    const cartCtx = useContext(CartContext);
    const userContext = useContext(UserContext)

    //const [showModal,setShowModal] = useState(false);

    const totalCartItems = cartCtx.items.reduce((totalNumberItems, item)=>{
        return totalNumberItems + item.quantity;
    },0)

    const [sticky, setScroll] = useState(false);



    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 10){
                setScroll(true);
            }else{
                setScroll(false);
            }
        })
    },[])


    const handleCartClick = () =>{
        console.log("open modal")
        //return "hiii"
        //setShowModal(true);
        userContext.showCart();

    }

    // const closeModal = () =>{
    //     setShowModal(false);
    // }

    return(
        <>
            
            <header id="main-header" className={ sticky ? 'scrolling' : ''}>
                <div id="title">
                    <img src={logoImg} />
                    <h1>Food Ponit</h1>
                </div>
                <nav>
                    <button onClick={handleCartClick} className='text-button'>Cart ({totalCartItems})</button>
                </nav>
            </header>
        </>
    )
}
export default Header;