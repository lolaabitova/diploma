import { NavLink } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import "./Nav.css";

export default function Nav(){
  return(
    <div class="container"><nav className="Nav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <CategoryList></CategoryList>
      </ul>
      
      
    
    </nav></div>
    
  );
}