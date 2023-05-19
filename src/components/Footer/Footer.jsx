
import { Link } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import "./Footer.css";


export default function Footer(){
  return(
    <div class="container"><footer className="Footer">
      <ul>
      
      <CategoryList />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
      
    
    </footer></div>
    
  );
}