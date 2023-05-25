import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product-page">
      <div class="hover-effect-btn">
        <img src={product.picture} alt={product.name} />
        <div className="product-name title">
          <div>
            <span className="product-page-name">{product.name}</span>
          </div>
          <div>
            <span className="product-page-price">{product.price}$</span>
          </div>
        </div>
        <div class="product-overlay"></div>
        <div class="button">
          <AddToCart product={product} /> 
         
        </div>
        
         
        
      </div>
      <div>
     <scroll-container>
            <scroll-page id="page-1">
            <span className="product-year">{product.name}</span> 
            
            </scroll-page>
            <scroll-page id="page-2"><span className="product-year">{product.year}</span></scroll-page>
            <scroll-page id="page-3"><span className="product-description">{product.description}</span>  </scroll-page>
            
          </scroll-container>
          
          </div> 

    </div>
  );
}
