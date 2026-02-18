'use client';

import React from 'react';

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
    {
        name: 'Amine El Amrani',
        role: 'Propriétaire de Café, Tanger',
        avatar: 'AA',
        avatarBg: '#f97316',
        rating: 5,
        quote: '"Leur système de réservation en ligne a simplifié notre gestion quotidienne. Nos clients adorent la facilité d\'utilisation. Un service client irréprochable."',
    },
    {
        name: 'Yasmine Benjelloun',
        role: 'Architecte, Agadir',
        avatar: 'YB',
        avatarBg: '#ec4899',
        rating: 5,
        quote: '"Une équipe à l\'écoute qui a su traduire ma vision artistique en un portfolio digital sublime. Les retours de mes clients sont unanimes : c\'est pro !"',
    },
    {
        name: 'Karim Tazi',
        role: 'PDG Tech Start-up, Casablanca',
        avatar: 'KT',
        avatarBg: '#0ea5e9',
        rating: 5,
        quote: '"Efficacité et expertise technique. AfsimTech a livré notre plateforme SaaS en un temps record avec une qualité de code irréprochable. Un partenaire de choix."',
    },
    {
        name: 'Leila Mansouri',
        role: 'Gérante de Spa, Marrakech',
        avatar: 'LM',
        avatarBg: '#8b5cf6',
        rating: 5,
        quote: '"La refonte de notre site web a apporté un vent de fraîcheur à notre marque. L\'intégration du système de rendez-vous est un game-changer pour nous."',
    },
    {
        name: 'Omar Filali',
        role: 'Restaurateur, Fès',
        avatar: 'OF',
        avatarBg: '#10b981',
        rating: 5,
        quote: '"AfsimTech a compris l\'essence de notre cuisine traditionnelle et l\'a sublimée sur le web. Notre menu digital est un franc succès auprès des touristes."',
    },
];

function Stars() {
    return (
        <div className="flex gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="#FFD700" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
    return (
        <div className="w-[350px] flex-shrink-0 flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#1a7bec]/30 hover:bg-white/8 transition-all duration-300">
            <Stars />
            <p className="text-white text-sm leading-relaxed mb-8 flex-1 italic">
                {t.quote}
            </p>
            <div className="flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{ background: t.avatarBg }}
                >
                    {t.avatar}
                </div>
                <div>
                    <p className="text-white font-bold text-sm tracking-tight">{t.name}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">{t.role}</p>
                </div>
            </div>
        </div>
    );
}

export function AvisSection() {
    return (
        <section id="avis" className="relative py-24 px-4 overflow-hidden">
            <div className="mx-auto max-w-6xl mb-16 text-center">
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

            {/* Infinite Marquee — Left to Right direction as requested by user */}
            <div className="marquee-container">
                <div className="marquee-content animate-marquee-right">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`${t.name}-${i}`} t={t} />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`${t.name}-dup-${i}`} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
