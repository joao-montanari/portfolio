import React from "react";
import { Outlet } from "react-router-dom";

import MenuItems from "@Components/MenuItems";

import "./style.sass";

const Default = () => {
    return (
        <div id="layout-default-container">
            <Outlet />
            <div id="layout-default-menu-items">
                <MenuItems/>
            </div>
        </div>
    );
}

export default Default;