import { useContext, useEffect, useState } from "react";
import "./CategoryToNav.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";


export default function CategoryToNav() {
  const { categories } = useContext(AppContext);

  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={'/category/' + category.path}>
        {category.name}
      </NavLink>
     
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>
        {output}
      </ul>
     
    </div>
  );
}