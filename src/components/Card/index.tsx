import { GitHub, Language } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import Button from '@Components/Button';
import getIcon from '@Utils/map-icons';
import './style.sass';

export interface CardProps {
    title: string;
    description: string;
    repositoryUrl: string;
    siteUrl: string;
    image: string;
    technologies: string[];
    design?: 'primary' | 'secondary';
    style?: React.CSSProperties;
}

const Card = ({
    title,
    description,
    repositoryUrl,
    siteUrl,
    image,
    technologies,
    design = 'primary',
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
            {
                design === 'primary' && (
                    <div className='card-image-area'>
                        <img src={image} alt="card image" />
                    </div>
                )
            }
            <div className={`card-component-content--${design}`}>
                <div className='header-card-area'>
                    <h3>{title}</h3>
                    <div className='point'/>
                    <div className='header-icons-area'>
                        {
                            technologies.map((t, index) => (
                                <img 
                                    key={`technology-card-icon-${index}`}
                                    src={getIcon(t)} 
                                    alt="card icon" 
                                    className='icons-card' 
                                />
                            ))
                        }
                    </div>
                </div>
                <p>{description}</p>
                {
                    design === 'primary' && (
                        <div className='card-component-technology-list'>
                            {
                                technologies.map((t, index) => (
                                    <div key={`tec-card-${index}`} className='tec-card-component'>
                                        {t}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                <div className='card-component-btn-area'>
                    <Button 
                        icon={GitHub} 
                        label='Código' 
                        onClick={() => navigate(repositoryUrl)}
                        size={design === 'secondary' ? 'small' : 'medium'}
                    />
                    <Button 
                        icon={Language} 
                        label='Website' 
                        design='tertiary' 
                        onClick={() => navigate(siteUrl)}
                        size={design === 'secondary' ? 'small' : 'medium'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;