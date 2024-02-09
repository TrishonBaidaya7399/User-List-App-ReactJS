import {
    createBrowserRouter,
  } from "react-router-dom";
import Users from "../Pages/UsersPage/Users";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/users",
            element:<Users/>
        },
      ]
    },
  ]);

export default router;  