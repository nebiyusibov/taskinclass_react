import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepages from "../pages/Homepages";
import Employees from "../pages/Employees";
import Favorite from "../pages/Favorite";
import AdminPanel from "../pages/AdminPanel";
import MainSite from "../pagesadmin/MainSite";
import EmployesAdmin from "../pagesadmin/EmployesAdmin";
import LogOut from "../pagesadmin/LogOut";
import AddEmployees from "../pagesadmin/AddEmployees";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                path: "/",
                element: <Homepages />,
            },
            {
                path: "Employes",
                element: <Employees />,
            },
            {
                path: "AdminPanel",
                element: <AdminPanel />,
            },
            {
                path: "Favorite",
                element: <Favorite />,
            },


        ],
    },
    {
        path: "/AdminPanel",
        element: <AdminPanel />,
        children:[
            
                {
                    path: "/AdminPanel",
                    element: <MainSite/>,
                },
                {
                    path: "/AdminPanel/EmployesAdmin",
                    element: <EmployesAdmin/>,
                },
                {
                    path: "/AdminPanel/AddEmployees",
                    element: <AddEmployees />,
                },
                {
                    path: "/AdminPanel/LogOut",
                    element: <LogOut />,
                },
            
        ]
    }
])