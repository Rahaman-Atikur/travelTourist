import { createBrowserRouter, type RouteObject } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Destination from "../pages/Destination";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/destination",
    element: <Destination></Destination>,
    loader:()=> fetch("/data.json"),
  },
];
export const router = createBrowserRouter(routes);
