import { createBrowserRouter, type RouteObject } from "react-router";
// import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

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
];
export const router = createBrowserRouter(routes);
