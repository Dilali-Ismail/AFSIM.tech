import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

/**
 * Reusable Card Component
 * Provides consistent styling for content cards
 * Optional hover effect
 */
const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    const hoverClass = hover ? 'card-hover' : '';

    return (
        <div
            className={`bg-white rounded-xl shadow-lg p-6 transition-smooth ${hoverClass} ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
