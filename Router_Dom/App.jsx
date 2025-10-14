//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖REACT ROUTER DOM➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//✅ ROUTER DOM:-
// IN APP.jsx:
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;

//> IN HEADER.jsx:(Under components folder)
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-emerald-900 flex py-5 px-10 items-center justify-between">
        <h2 className="text-4xl">
          Mahek{" "}
          <input className="bg-white text-black w-70 h-8 mt-1.5" type="text" />
        </h2>
        <div className="flex gap-8 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

//>📃 PAGES:(Under pages folder)
# <About /> page 
# <Contact /> page
# <Product /> page
