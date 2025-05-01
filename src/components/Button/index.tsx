import { SvgIcon } from '@mui/material';
import './style.sass';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    size?: 'small' | 'medium' | 'larger';
    color?: string;
    backgroundColor?: string;
    disabled?: boolean;
    design?: 'primary' | 'secondary';
    type?: "button" | "submit" | "reset" | undefined;
    icon?: any;
}

const Button = ({
    label,
    size = 'medium',
    color,
    backgroundColor,
    disabled = false,
    design = 'primary',
    type = 'button',
    icon,
    ...props
} : ButtonProps) => {
    return (
        <button 
            id={`custom-button-component-${design}${disabled ? '--disabled' : ''}--${size}`}
            className={[
                'custom-button-component',
                `custom-button-component-${design}${disabled ? '--disabled' : ''}`,
                `custom-button-component--${size}`
            ].join(' ')}
            type={type}
            disabled={disabled}
            style={{
                backgroundColor,
                color,
            }}
            {...props}
        >
            {label}
            {
                icon && <SvgIcon 
                    component={icon} 
                    className='button-component-icon'
                />
            }
        </button>
    )
}

export default Button;