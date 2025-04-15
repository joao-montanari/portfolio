import './style.sass';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    size?: 'small' | 'medium' | 'larger';
    color?: string;
    backgroundColor?: string;
    disabled?: boolean;
    design?: 'primary' | 'secondary' | 'tertiary' | 'fourth';
    type?: "button" | "submit" | "reset" | undefined;
    icon?: string;
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
                icon && <img src={icon} alt="button icon" />
            }
        </button>
    )
}

export default Button;