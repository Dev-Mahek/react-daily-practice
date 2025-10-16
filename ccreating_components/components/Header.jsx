import React from "react";
import { Contact, House, ReceiptText, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative h-screen w-full">
      <nav
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-zinc-700 text-white p-3 rounded-2xl w-90 h-22"
      >
        <div className="flex gap-12 items-center justify-center mt-5 text-xl">
          <Link to="/" className="font-semibold flex items-center gap-1">
            <House />
          </Link>
          <Link to="/about" className="font-semibold flex items-center gap-1">
            <ReceiptText />
          </Link>
          <Link to="/contact" className="font-semibold flex items-center gap-1">
            <Contact />
          </Link>
          <Link to="/product" className="font-semibold flex items-center gap-1">
            <ShoppingBasket />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
