import React from "react";

import './style.sass';

const Home = () => {
    return (
        <div id="home-page-container">
            <div id="home-page-content">
                <div id="home-page-content-infos">
                    <h3>HI THERE!</h3>
                    <h1>I´M JOÃO MONTANARI</h1>
                    <label>SYSTEM DEVELOPMENT / FRONT END</label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button>MORE ABOUT ME</button>
                </div>
            </div>
            <div id="home-page-content-image"/>
        </div>
    );
}

export default Home;