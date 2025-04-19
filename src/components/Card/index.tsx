import { GitHub, Language } from '@mui/icons-material';

import Button from '@Components/Button';
import './style.sass';

export interface CardProps {
    title: string;
    description: string;
    repositoryUrl: string;
    siteUrl: string;
    image: string;
    design?: 'primary'
}

const Card = () => {
    return (
        <div className='card-component-container'>
            <div className='card-image-area'>
                <img src="https://github.com/joao-montanari.png" alt="card image" />
            </div>
            <div>
                <div>
                    <h3>Noisekun</h3>
                </div>
                <p>Website para ouvir combinações de sons para relaxar e se tornar mais produtivo nas suas tarefas.</p>
                <div>
                    <Button icon={GitHub} label='Source' onClick={() => {}}/>
                    <Button icon={Language} label='Website' design='tertiary' onClick={() => {}}/>
                </div>
            </div>
        </div>
    )
}

export default Card;