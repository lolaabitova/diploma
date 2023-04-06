import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home.jsx";

export default function App(){
  return(
    <div className = "App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/contact" element={<Contact />} exact/>
          <Route path="/delivery" element={<Delivery />} exact/>
        </Routes>
      </Layout>
    </div>
  );
}
