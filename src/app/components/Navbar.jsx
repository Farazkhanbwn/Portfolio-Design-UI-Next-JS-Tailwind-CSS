import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },

  {
    title: "Projects",
    href: "#projects",
  },

  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu block md:w-auto" id="navbar">
          <ul className="flec p-4 md:p-0 md:flex-row">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
