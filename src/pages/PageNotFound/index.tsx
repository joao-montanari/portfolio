import { useNavigate } from 'react-router-dom';
import './style.sass';
import Button from '@Components/Button';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='page-not-found-container'>
            <h1>Página não encontrada</h1>
            <Button 
                label='Voltar' 
                onClick={() =>  navigate('/')}
                design='fourth'
            />
        </div>
    )
}

export default PageNotFound;