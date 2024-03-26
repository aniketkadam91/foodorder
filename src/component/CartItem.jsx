
import { currencyFormater } from "../util/CurrenyFormater";
const CartItem = ({name,quantity, price, onIncrease , onDecrease}) =>{
    return (
        <>
            <li className="cart-item">
                <p className="">
                    {name} - {quantity} X {currencyFormater.format(price)}
                </p>
                <p className="cart-item-actions">
                    <button onClick={onDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={onIncrease}>+</button>
                </p>
            </li>
        </>
    )
}

export default CartItem;