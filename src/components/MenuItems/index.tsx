import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Gite, Person, BusinessCenter, Tv, Campaign, Email } from '@mui/icons-material';

import './style.sass';

const options = [
    { path: "/", icon: <Gite/>, show: true },
    { path: "/about-me", icon: <Person/>, show: true },
    { path: "/resume", icon: <BusinessCenter/>, show: true },
    { path: "/projects", icon: <Tv/>, show: true },
    { path: "/technologies", icon: <Campaign/>, show: true },
    { path: "/contact", icon: <Email/>, show: true },
]

const MenuItems = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('LOCATION: ', location.pathname);
    }, [location]);

    const comparete = (path : string) => {
        if (location.pathname === path) {
            console.log('É IGUAL');
        }
    }

    return (
        <div id="menu-items-container">
            {
                options.map((option, index) => (
                    option.show && (
                        <button 
                            key={index}
                            onClick={() => navigate(option.path)}
                            id={`${location.pathname === option.path ? 'menu-items-option-select' : ''}`}
                        >
                            {option.icon}
                        </button>
                    )
                ))
            }
        </div>
    );
}

export default MenuItems;