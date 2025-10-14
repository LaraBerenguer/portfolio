import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
};

const MainButton: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    type = 'button'
}) => {
    const baseClasses = 'font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

    const variants = {
        primary: 'bg-gradient-to-br from-primary to-pink-500 hover:from-primary-dark hover:to-pink-600 text-white shadow-lg hover:shadow-xl focus:ring-primary',
        secondary: 'bg-gradient-to-br from-gold to-emerald hover:from-gold hover:to-emerald text-white shadow-lg hover:shadow-xl focus:ring-gold',
        outline: 'border-2 border-transparent bg-gradient-to-br from-primary to-pink-500 bg-clip-border hover:from-primary-dark hover:to-pink-600 text-transparent bg-clip-text hover:text-white hover:bg-clip-padding'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
        >
            {children}
        </button>
    );
};

export default MainButton;