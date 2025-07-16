import {
    createBrowserRouter,
    
  } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {index:true, Component:Home},
        {
          path:"/login",
          Component:Login
        }
      ]
    },
  ]);