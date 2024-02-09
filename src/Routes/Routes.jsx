import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
      ]
    },
  ]);

export default router;  