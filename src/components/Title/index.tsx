import React from "react";

import "./style.sass";

const Title = ({ title } : { title : string }) => {
    return (
        <div id="title-component-content">
            <h1>{title}</h1>
        </div>
    );
}

export default Title;