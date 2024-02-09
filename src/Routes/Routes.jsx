import {
    createBrowserRouter,
  } from "react-router-dom";
import Users from "../Pages/UsersPage/Users";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/Error";
import UserDetails from "../Pages/UserDetails/UserDetails";
import AddUser from "../Pages/AddUser/AddUser";

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
        {
          path: "/userDetails/:userId", 
          element: <UserDetails/>
        },
        {
          path: "/addUser",
          element:<AddUser/>
        }
        
      ]
    },
  ]);

export default router;  