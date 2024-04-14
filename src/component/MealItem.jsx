import { useContext } from "react";
import { currencyFormater } from "../util/CurrenyFormater.js";
import Button from "./Button.jsx";
import { CartContext } from "../store/cart-context.jsx";
const MealItem = ({ meal }) => {
  //console.log(meal.id);
  const addItemToCart = useContext(CartContext);

  const homeurl = window.location.origin;

  const handleAddToCart = () => {
    //console.log(meal)
    addItemToCart.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`${homeurl}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormater.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <button className="button" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </p>
        </div>
      </article>
    </li>
  );
};
export default MealItem;
