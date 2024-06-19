import React from "react";

import TechnologyCard from "@Components/Cards/Technology";

import { technologies } from "@Utils/constants";

import './style.sass';

const Technologies = () => {
    return (
        <div id="technologies-page-container">
            {
                technologies && technologies.map((technology) => (
                    <TechnologyCard
                        title={technology.name}
                        description=""
                        image=""
                    />
                ))
            }
        </div>
    )
}

export default Technologies;