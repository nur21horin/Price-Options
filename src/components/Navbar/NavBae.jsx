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
    <div className="text-black bg-amber-300">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineMenuFold className="text-2xl " />
        ) : (
          <AiOutlineMenuFold className="text-2xl " />
        )}
      </div>
      <ul className={`md:flex duration-1000 absolute
      ${open?'top-16':'-top-60'}
       bg-amber-500 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
