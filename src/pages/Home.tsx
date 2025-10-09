// import React from 'react';

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import DestinationCard from "./DestinationCard";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <DestinationCardProps></DestinationCard>
             */}
             {/* <DestinationCardProps></DestinationCardProps> */}
             <DestinationCard></DestinationCard>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;