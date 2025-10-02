import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-emerald-900 flex py-5 px-10 items-center justify-between">
        <h2 className="text-4xl">Mahek</h2>
        <div className="flex gap-8 items-center">
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contact</h4>
          <h4 className="text-xl">Products</h4>
          <h4 className="text-xl">Projects</h4>
        </div>
      </nav>
    </div>
  );
};

export default Header;
