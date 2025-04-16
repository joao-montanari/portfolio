import { createHashRouter } from "react-router-dom";

import DefaultLayout from "@Layouts/Default";

import HomePage from "@Pages/Home";
import PageNotFound from "@Pages/PageNotFound";

const routers = createHashRouter([
    {
        path: "",
        element: <DefaultLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    }
]);

export default routers;