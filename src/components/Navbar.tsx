import type React from "react";
import bgImage from "../assets/images/Rectangle 1.png";
import { NavLink } from "react-router";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="absolute brightness-50">
        <img src={bgImage} alt="" />
      </div>
      {/* Navbar */}
      <div className="flex justify-around content-center relative pt-20 text-white ">
        <p className="text-4xl font-extrabold">Travel <br /><span className="text-green-600">Lover</span> </p>
        <input 
          type="text"
          placeholder="neutral"
          className="input input-neutral"
        />
        <NavLink className="text-xl" to="/news">News</NavLink>
        <NavLink className="text-xl" to="/destination">Destination</NavLink>
        <NavLink className="text-xl" to="/blog">Blog</NavLink>
        <NavLink className="text-xl" to="/">Home</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
      {/* Card */}
       <div className="relative text-white mx-10 my-10 ">
          <p className="text-6xl font-extrabold">Cox's Bazar</p>
          <p>Cox's Bazar is a city, fishing port, <br /> tourism centre and district headquarters in southeastern Bangladesh. <br /> It is famous mostly for its long natural sandy beach, and it ...</p>
        </div>
    </>
  );
};
export default Navbar;
