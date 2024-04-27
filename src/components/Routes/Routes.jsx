import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import All_Tourists_Spot from "../Pages/All_Tourists_Spot";
import Add_Tourist_Sport from "../Pages/Add_Tourist_Sport";
import My_List from "../Pages/My_List";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/All_Tourists_Spot',
                element:<All_Tourists_Spot></All_Tourists_Spot>
            },
            {
                path:'/Add_Tourist_Sport',
                element:<PrivateRoute><Add_Tourist_Sport></Add_Tourist_Sport></PrivateRoute>
            },
            {
                path:'/My_List',
                element:<PrivateRoute><My_List></My_List></PrivateRoute>
            },
            {
                path:'/LogIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/Register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;