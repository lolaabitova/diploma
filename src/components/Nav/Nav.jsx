import { NavLink } from "react-router-dom";
import Auth from "../Auth/Auth";
import CategoryList from "../CategoryList/CategoryList";
import CategoryToNav from "../CategoryToNav/CategoryToNav";
import "./Nav.css";


export default function Nav(){
  return(
    <div class="container"><nav className="Nav">
      <ul>
      
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <CategoryToNav></CategoryToNav>
        
      </ul>
      
      
    
    </nav></div>
    
  );
}