import { createHashRouter } from "react-router-dom";

import DefaultLayout from "@Layouts/Default";

import HomePage from "@Pages/Home";
import PageNotFound from "@Pages/PageNotFound";
import ProjectsPage from "@Pages/Projects";

const routers = createHashRouter([
    {
        path: "",
        element: <DefaultLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/home",
                element: <HomePage/>
            },
            {
                path: "/projects",
                element: <ProjectsPage/>
            },
        ]
    }
]);

export default routers;