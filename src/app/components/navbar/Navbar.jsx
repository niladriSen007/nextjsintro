import React from "react";
import Link from "next/link";
import { links } from "@/app/utils/navmenus";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link className="brand-name" href={"/"}>Zodiac.</Link>
      </div>
      <div>
        <ul className="navbar-nav">
          {
            links.map(link=>(
                <li className="nav-link" key={link.id}>
                    <Link href={link.url}>{link.title}</Link>
                </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
