import { GitHub, Language } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import Button from '@Components/Button';
import './style.sass';

export interface CardProps {
    title: string;
    description: string;
    repositoryUrl: string;
    siteUrl: string;
    image: string;
    technologies: string[];
    design?: 'primary';
    style?: React.CSSProperties;
}

const Card = ({
    title,
    description,
    repositoryUrl,
    siteUrl,
    image,
    technologies,
    style,
    ...props
}: CardProps) => {
    const navigate = useNavigate();

    return (
        <div 
            className='card-component-container' 
            style={style} 
            {...props}
        >
            <div className='card-image-area'>
                <img src={image} alt="card image" />
            </div>
            <div className='card-component-content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='card-component-technology-list'>
                    {
                        technologies.map((t, index) => (
                            <div key={`tec-card-${index}`} className='tec-card-component'>
                                {t}
                            </div>
                        ))
                    }
                </div>
                <div className='card-component-btn-area'>
                    <Button icon={GitHub} label='Código' onClick={() => navigate(repositoryUrl)}/>
                    <Button icon={Language} label='Website' design='tertiary' onClick={() => navigate(siteUrl)}/>
                </div>
            </div>
        </div>
    )
}

export default Card;