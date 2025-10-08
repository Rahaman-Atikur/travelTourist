// import React from 'react';
import { NavLink } from "react-router";
const Destination = () => {
    return (
        <div>
            <h2>Choose A Destination</h2>
            <div className="flex justify-around content-center relative pt-20 text-black ">
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
        </div>
    );
};

export default Destination;