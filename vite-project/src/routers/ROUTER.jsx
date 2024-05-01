import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/Homepages";
import Employees from "../pages/Employees";
import Favorite from "../pages/Favorite";
import AdminPanel from "../pages/AdminPanel";


export const Router=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            
            {
                path:"/",
                element:<Homepages/>,
            },
            {
                path:"Employes",
                element:<Employees/>,
            },
            {
                path:"AdminPanel",
                element:<AdminPanel/>,
            },
            {
                path:"Favorite",
                element:<Favorite/>,
            },
       
    
        ],
    },
])