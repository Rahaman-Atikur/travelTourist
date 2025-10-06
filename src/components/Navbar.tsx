import type React from "react";
import bgImage from "../assets/images/Rectangle 1.png";
import navIcon from "../assets/images/logo.png";
import { NavLink } from "react-router";

const Navbar: React.FC = () => {
  return (
    <>
      <div>
        <img src={bgImage} alt="" />
      </div>
      {/* Navbar */}
      <div className="flex justify-around content-center">
        <img className="w-15 h-15" src={navIcon} alt="" />
        <input 
          type="text"
          placeholder="neutral"
          className="input input-neutral"
        />
        <NavLink to="/news">News</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <button className="btn primary">Login</button>
      </div>
    </>
  );
};

export default Navbar;
