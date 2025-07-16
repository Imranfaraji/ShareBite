import {
    createBrowserRouter,
    
  } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Registration/SignUp"

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {index:true, Component:Home},
        {
          path:"/login",
          Component:Login
        },
        {
          path:'/signup',
          Component:SignUp
        }
      ]
    },
  ]);