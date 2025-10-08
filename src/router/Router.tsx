import { createBrowserRouter, type RouteObject } from "react-router";
// import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Destination from "../pages/Destination";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home></Home>,
    // children: [
    //   { path: "/login", element: <Login></Login> },
    //   { path: "/register", element: <Register></Register> },
    // ],
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
  },
];
export const router = createBrowserRouter(routes);
