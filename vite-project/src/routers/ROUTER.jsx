import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/Homepages";
import Detail from "../pages/Detail";


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
                element:<Detail/>,
            },
            {
                path:"AdminPanel",
                element:<Detail/>,
            },
            {
                path:"Favorite",
                element:<Detail/>,
            },
       
    
        ],
    },
])