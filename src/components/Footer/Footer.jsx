import { Link } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import "./Footer.css";

export default function Footer() {
  return (
    
      <footer className="Footer">
        <div className="footer-page">
          <div>
            
            <CategoryList />
          </div>
          <div className="footer-pages">
            
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/delivery">Delivery</Link>
          </div>
        </div>
        
      </footer>
   
  );
}
