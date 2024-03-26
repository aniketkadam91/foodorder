import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import resData from "../util/products.json";

const Products = () => {
  const [products, setProucts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      // const response = await fetch ("http://localhost:3000/meals/");
      // const resData = await response.json();
      setProucts(resData);
    }

    getProducts();
  }, []);
  return (
    <>
      {
        <ul id="meals">
          {products.map((product) => {
            return <MealItem meal={product} key={product.id} />;
          })}
        </ul>
      }
    </>
  );
};
export default Products;
