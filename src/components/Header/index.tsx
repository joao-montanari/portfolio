import { useLocation, useNavigate } from 'react-router-dom';
import { Language, DataObject } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';

import '@Root/i18n';
import Button from '@Components/Button';
import './style.sass';

export interface HeaderProps {
    design?: 'primary';
}

const links = [
    { name: 'header.home', url: '/home' },
    { name: 'header.projects', url: '/projects' },
    { name: 'header.about_me', url: '/about-us' },
]

const Header = ({ design = 'primary' } : HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

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
                            label={t(link.name)}
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