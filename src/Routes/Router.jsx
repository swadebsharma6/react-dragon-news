import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";

export const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children:[
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  }
                  
            ]
      }
])