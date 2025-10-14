// import React from 'react';
import { NavLink, useLoaderData } from "react-router";
import Card from "../components/Card";
import type React from "react";
interface DestinationData {
  id: number;
  name: string;
  image: string;
  description: string;
  [key: string]: unknown;
}
const Destination: React.FC = () => {
  const data = useLoaderData() as DestinationData[];
  console.log(data);
  return (
    <div>
      <h2>Choose A Destination</h2>
      <div className="flex justify-around content-center relative pt-20 text-black ">
        <p className="text-4xl font-extrabold">
          Travel <br />
          <span className="text-green-600">Lover</span>{" "}
        </p>
        <input
          type="text"
          placeholder="neutral"
          className="input input-neutral"
        />
        <NavLink className="text-xl" to="/news">
          News
        </NavLink>
        <NavLink className="text-xl" to="/destination">
          Destination
        </NavLink>
        <NavLink className="text-xl" to="/blog">
          Blog
        </NavLink>
        <NavLink className="text-xl" to="/">
          Home
        </NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data?.map((singleData) => (
          <Card key={singleData.id} singleData={singleData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Destination;
