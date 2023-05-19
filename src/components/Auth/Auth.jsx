import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      Guest <button className="neon-btn sing" onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span >
       
        <button className="neon-btn sing" onClick={logOut}>Sign out</button> 
       <span className="user-name"><Link to="/orders">{user.displayName}</Link></span> 
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}