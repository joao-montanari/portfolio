import { createHashRouter } from "react-router-dom";

import HomePage from "@Pages/Home";

import DefaultLayout from "@Layouts/Default";

const routers = createHashRouter([
    {
        path: "",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    }
]);

export default routers;