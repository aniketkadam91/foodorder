import Products from "./component/Products";
import Header from "./component/Header";
import CartContextProvider from './store/cart-context.jsx'
import Navigation from "./component/Navigation.jsx";
import Footer from "./component/Footer.jsx";
import Cart from './component/Cart.jsx'
import UserProgressProvider from "./store/userProgress.jsx";
function App() {
  return (
    <>
      <UserProgressProvider>
      <CartContextProvider>
        <Header/>
        <Navigation/>
        <Products/>
        <Cart></Cart>
        <Footer/>
      </CartContextProvider> 
      </UserProgressProvider>
    </>
  );
}

export default App;
