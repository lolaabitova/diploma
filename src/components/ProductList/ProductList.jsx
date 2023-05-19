import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../Deleteproduct/Deleteproduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)

    .map((product) => (
      <div className="Product" key={product.id}>
        <div class="hover-effect-btn">
          <img src={product.picture} alt={product.name} />
          <div className="product-name title">
            <div>
              <span>{product.name}</span>
            </div>
            <div>
              <span>{product.price}$</span>
            </div>
          </div>
          <div class="overlay"></div>
          <div class="button">
            <AddToCart product={product} />
          </div>
        </div>
        <form action={"/product/" + product.path} target="_blank">
          <button className="neon-btn btn-more">LEARN MORE</button>
        </form>

        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      <div className="home-welcome">
        <div class="home-welcome-img">
          <img
            src="https://wp-s.ru/wallpapers/2/0/535207168449163/krasnyj-chevrolet-korvet-edushhij-po-doroge.jpg"
            alt=""
          />
        </div>
        <div class="home-welcome-text">
          <h1>
            Change your way on our {category ? category.name : "Loading..."}
          </h1>
        </div>
      </div>

      {output}
      <AddProduct category={category}></AddProduct>
    </div>
  );
}
