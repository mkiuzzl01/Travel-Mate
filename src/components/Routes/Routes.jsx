import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import All_Tourists_Spot from "../Pages/All_Tourists_Spot";
import Add_Tourist_Sport from "../Pages/Add_Tourist_Sport";
import My_List from "../Pages/My_List";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import View_Details from "../Pages/View_Details";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                loader:()=> fetch('http://localhost:5000/Tourist_Sports'),
                element:<Home></Home>
            },
            {
                path:'/All_Tourists_Spot',
                loader:()=> fetch('http://localhost:5000/Tourist_Sports'),
                element:<All_Tourists_Spot></All_Tourists_Spot>
            },
            {
                path:'/View_Details/:id',
                loader:({params})=> fetch(`http://localhost:5000/Tourist_Sports/${params.id}`),
                element:<View_Details></View_Details>
            },
            {
                path:'/Add_Tourist_Sport',
                element:<PrivateRoute><Add_Tourist_Sport></Add_Tourist_Sport></PrivateRoute>
            },
            {
                path:'/My_List/:email',
                loader:({params})=> fetch(`http://localhost:5000/Tourist_Sports/${params.email}`),
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