import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/service',
                    element:<Service></Service>
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
            ]
           }
])

export default router;