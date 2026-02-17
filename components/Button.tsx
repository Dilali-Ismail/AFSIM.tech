import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

/**
 * Reusable Button Component
 * Supports primary, secondary, and outline variants
 * Can be used as a link or button
 */
const Button: React.FC<ButtonProps> = ({
    children,
    href,
    variant = 'primary',
    size = 'md',
    onClick,
    type = 'button',
    className = '',
}) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg transition-smooth btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles
    const variantStyles = {
        primary: 'bg-accent text-white hover:bg-[#0099cc] focus:ring-accent',
        secondary: 'bg-primary text-white hover:bg-[#003366] focus:ring-primary',
        outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent',
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    // Render as Link if href is provided
    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    // Render as Button
    return (
        <button type={type} onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
};

export default Button;
