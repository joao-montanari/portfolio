import { createHashRouter } from "react-router-dom";

import Home from "@Pages/Home";
import Resume from "@Pages/Resume";
import Contact from "@Pages/Contact";
import Projects from "@Pages/Projects";
import AboutMe from "@Pages/AboutMe";

import Default from "@Layouts/Default";
import SubPages from "@Layouts/SubPages";

const routers = createHashRouter([
    {
        path: "",
        element: <Default/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "",
                element: <SubPages/>,
                children: [
                    {
                        path: "/resume",
                        element: <Resume/>
                    },
                    {
                        path: "/contact",
                        element: <Contact/>
                    },
                    {
                        path: "/projects",
                        element: <Projects/>
                    },
                    {
                        path: "/about-me",
                        element: <AboutMe/>
                    },
                ]
            }
        ]
    }
]);

export default routers;