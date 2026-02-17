import React from 'react';
import { Button } from '@/components/ui/button';
import { AvatarGroup } from '@/components/avatar-group';
import { StarRating } from '@/components/star-rating';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    showSocialProof?: boolean;
}

export function Hero({
    title,
    subtitle,
    ctaText = 'Get Started',
    ctaLink = '/contact',
    showSocialProof = true,
}: HeroProps) {
    const avatars = [
        { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
        { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
        { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' },
        { src: 'https://i.pravatar.cc/150?img=4', alt: 'User 4' },
    ];

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-32 pt-20">
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Main Heading */}
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl text-balance text-center text-base leading-relaxed text-white/70 md:text-lg">
                    {subtitle}
                </p>

                {/* CTA Button */}
                <Button
                    asChild
                    className="rounded-full bg-white px-8 py-3 text-[#1a0a3e] transition-all duration-300 hover:scale-105 hover:bg-white/95"
                    size="lg"
                >
                    <a href={ctaLink}>{ctaText}</a>
                </Button>

                {/* Social Proof */}
                {showSocialProof && (
                    <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
                        <AvatarGroup avatars={avatars} max={4} />
                        <div className="flex flex-col items-center gap-1 md:items-start">
                            <StarRating rating={5} size="sm" />
                            <p className="text-sm text-white/60">Trusted by 100+ businesses</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
