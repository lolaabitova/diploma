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
         
        </div>
        
      </footer>
   
  );
}
