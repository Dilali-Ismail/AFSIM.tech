import React from 'react';
import Button from './Button';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundGradient?: boolean;
    centered?: boolean;
}

/**
 * HeroSection Component
 * Reusable hero section for all pages
 * Supports gradient backgrounds and custom CTAs
 */
const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundGradient = true,
    centered = true,
}) => {
    const bgClass = backgroundGradient ? 'gradient-bg' : 'bg-light';
    const alignClass = centered ? 'text-center' : 'text-left';

    return (
        <section className={`${bgClass} py-20 md:py-32`}>
            <div className="container-custom">
                <div className={`max-w-4xl ${centered ? 'mx-auto' : ''} animate-fade-in`}>
                    <h1 className={`text-white mb-6 ${alignClass}`}>
                        {title}
                    </h1>
                    <p className={`text-xl md:text-2xl text-gray-100 mb-8 ${alignClass}`}>
                        {subtitle}
                    </p>
                    {ctaText && ctaLink && (
                        <div className={centered ? 'flex justify-center' : ''}>
                            <Button href={ctaLink} size="lg">
                                {ctaText}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
