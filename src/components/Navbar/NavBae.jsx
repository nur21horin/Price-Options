import React, { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuFold } from "react-icons/ai";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <div className="md:flex">
      <div className="md:hidden" onClick={() => setOpen(true)}>
        {open === true ? "open" : "close"}
        <AiOutlineMenuFold className="text-2xl " />
      </div>
      {routes.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
    </div>
  );
};

export default NavBar;
