import React from "react";
import { LinkedIn, GitHub } from '@mui/icons-material';

import './style.sass';

const Contact = () => {
    return (
        <div id="contact-page-container">
            <h1>Feel <strong>free</strong> to contact me!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div id="contact-page-content">
                <div id="contact-page-card">
                    <LinkedIn/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div id="contact-page-card">
                    <GitHub/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;