// import React from 'react';

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
// import DestinationCard from "./DestinationCard";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;