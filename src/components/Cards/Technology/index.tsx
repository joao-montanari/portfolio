import React from "react";

import './style.sass';

const TechnologyCard = ({ 
    title, 
    image, 
    description 
} : { 
    title : string, 
    image : string, 
    description : string
}) => {
    return (
        <div id="card-technology-container">
            <h1>{title}</h1>
        </div>
    )
}

export default TechnologyCard;