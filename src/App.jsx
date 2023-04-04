import { NavLink, Route, Routes } from "react-router-dom";

export default function App(){
  return(
    <div className = "App">
      <h1>Hello world</h1>
      <p>This is my diploma</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} exact/>
          <Route path="/about" element={<h2>About</h2>}exact/>
        </Routes>
      </main>
    </div>
  );
}
