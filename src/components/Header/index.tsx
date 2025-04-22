import { useLocation, useNavigate } from 'react-router-dom';
import { Language, DataObject } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

import Button from '@Components/Button';
import './style.sass';

export interface HeaderProps {
    design?: 'primary';
}

const links = [
    { name: 'Início', url: '/home' },
    { name: 'Projetos', url: '/projects' },
    { name: 'Sobre mim', url: '/about-us' },
]

const Header = ({ design = 'primary' } : HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div 
            className={[
                'custom-header-component',
                `custom-header-component-${design}`
            ].join(' ')}
        >
            <div className='left-side-header'>
                <SvgIcon component={DataObject} className='logo-header'/>
            </div>
            <div className='right-side-header'>
                {
                    links.map((link) => (
                        <Button
                            design='secondary'
                            label={link.name}
                            onClick={() => navigate(link.url)}
                            color={(location.pathname.indexOf(`${link.url}`) !== -1) ? 'white' : ''}
                        />
                    ))
                }
                <SvgIcon component={Language} className='select-lang-header'/>
            </div>
        </div>
    )
}

export default Header;