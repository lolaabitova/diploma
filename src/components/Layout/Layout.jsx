import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "../../pages/About";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
      <CartLink />
        <Nav />
        <Auth />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
      </header>
      <aside>
        
      </aside>
      <main>{props.children}</main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}
