import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Title from "@Components/Title";
import SideMenu from "@Components/SideMenu";

import './style.sass';

const referenceTitle = [
    { path: "/about-me", title: "ABOUT ME" },
    { path: "/resume", title: "RESUME" },
    { path: "/projects", title: "PROJECTS" },
    { path: "/contact", title: "CONTACT" },
]

const SubPages = () => {
    const location = useLocation();
    const [title, setTitle] = useState("");

    useEffect(() => {
        referenceTitle.forEach((reference) => {
            if (reference.path === location.pathname) {
                setTitle(reference.title);
            }
        })
    }, [location]);

    return (
        <div id="sub-page-layout-container">
            <SideMenu/>
            <div id="sub-page-layout-content">
                <Title title={title} />
                <Outlet />
            </div>
        </div>
    );
}

export default SubPages;