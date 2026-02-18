'use client';

import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
    {
        name: 'Emma Reynolds',
        role: 'Directrice Marketing, Casablanca',
        avatar: 'ER',
        avatarBg: '#1a7bec',
        rating: 5,
        quote: '"AfsimTech a complètement transformé notre présence en ligne. Le site est élégant, rapide, et nos conversions ont explosé dès le premier mois. Une équipe exceptionnelle !"',
    },
    {
        name: 'Liam Bennett',
        role: 'Gérant Hôtel, Marrakech',
        avatar: 'LB',
        avatarBg: '#10b981',
        rating: 5,
        quote: '"Résultats au-delà de nos attentes. Notre taux de réservation en ligne a triplé en 6 semaines. Je recommande AfsimTech sans hésitation à toute entreprise sérieuse."',
    },
    {
        name: 'Sophia Carter',
        role: 'Fondatrice Boutique, Rabat',
        avatar: 'SC',
        avatarBg: '#8b5cf6',
        rating: 5,
        quote: '"Professionnalisme, créativité et rapidité. Mon site e-commerce est magnifique et mes ventes ont augmenté de 60% en 3 mois. Merci à toute l\'équipe AfsimTech !"',
    },
];

function Stars() {
    return (
        <div className="flex gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="#FFD700" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function TestimonialBlock({ t, index }: { t: typeof testimonials[0]; index: number }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="flex flex-col"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.7s ease ${index * 0.18}s, transform 0.7s ease ${index * 0.18}s`,
            }}
        >
            {/* Gold stars at top */}
            <Stars />

            {/* Quote — high contrast white */}
            <p className="text-white text-base leading-relaxed mb-6 flex-1">
                {t.quote}
            </p>

            {/* Author — avatar left of name */}
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{ background: t.avatarBg }}
                >
                    {t.avatar}
                </div>
                <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                </div>
            </div>
        </div>
    );
}

export function AvisSection() {
    return (
        <section id="avis" className="relative py-24 px-4">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#1a7bec]/30 bg-[#1a7bec]/10 text-[#1a7bec] text-xs font-bold uppercase tracking-widest mb-5">
                        Avis Clients
                    </span>
                    <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
                        Ce que disent <span className="text-[#1a7bec]">nos clients</span>
                    </h2>
                    <p className="text-white/50 text-base max-w-xl mx-auto">
                        La satisfaction de nos clients est notre meilleure récompense.
                    </p>
                </div>

                {/* Three-column transparent layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialBlock key={t.name} t={t} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
