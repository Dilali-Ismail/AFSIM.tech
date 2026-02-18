'use client';

import React, { useRef, useEffect, useState } from 'react';

const services = [
    {
        icon: '🌐',
        color: 'from-blue-500 to-blue-700',
        glow: 'rgba(59, 130, 246, 0.4)',
        title: 'Sites Web',
        fullTitle: 'Création de Sites Web',
        description: 'Nous transformons vos idées en sites web performants et sur-mesure. Des solutions modernes, responsive et optimisées pour convertir vos visiteurs en clients.',
        tags: ['Mobile-first', 'SEO inclus', 'Sur-mesure'],
    },
    {
        icon: '🔍',
        color: 'from-blue-600 to-sky-500',
        glow: 'rgba(26, 123, 236, 0.4)',
        title: 'SEO',
        fullTitle: 'Référencement Naturel (SEO)',
        description: 'Dominez Google et attirez des clients qualifiés durablement. Nous optimisons votre site pour une visibilité locale maximale au Maroc.',
        tags: ['Google Local', 'Audit SEO', 'Résultats'],
    },
    {
        icon: '🔒',
        color: 'from-indigo-600 to-blue-500',
        glow: 'rgba(79, 70, 229, 0.4)',
        title: 'Sécurité',
        fullTitle: 'Sécurité & Maintenance',
        description: 'Votre site est votre actif n°1. Nous le protégeons 24/7, mettons à jour et garantissons une performance optimale en continu.',
        tags: ['Surveillance', 'Updates', 'Backups'],
    },
    {
        icon: '⚙️',
        color: 'from-blue-700 to-blue-400',
        glow: 'rgba(26, 123, 236, 0.4)',
        title: 'Applications',
        fullTitle: 'Applications Web',
        description: 'Des applications web puissantes pour automatiser vos processus métier. Outils sécurisés, évolutifs et perfectly intégrés.',
        tags: ['Sur-mesure', 'SaaS', 'API'],
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="relative py-24 px-4 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#1a7bec]/30 bg-[#1a7bec]/10 text-[#1a7bec] text-xs font-bold uppercase tracking-widest mb-5">
                        Nos Services
                    </span>
                    <h2 className="section-heading text-4xl md:text-5xl text-white mb-4 leading-tight">
                        Solutions web pour une<br />
                        <span className="text-[#1a7bec]">présence puissante</span>
                    </h2>
                    <p className="text-white/50 text-base max-w-xl mx-auto">
                        Choisissez une solution adaptée à vos objectifs de croissance.
                    </p>
                </div>

                {/* Accordion Cards Container */}
                <div className="flex flex-col md:flex-row gap-3 h-[600px] md:h-[450px] w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex-1 hover:flex-[4] transition-all duration-700 ease-in-out overflow-hidden rounded-xl bg-[#0d1628]/40 border border-white/10 hover:border-[#1a7bec]/50 flex flex-col md:flex-row items-center justify-center relative cursor-pointer group"
                        >
                            {/* Vertical Text (Visible when not hovered) */}
                            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 pointer-events-none">
                                <span className="text-xl md:text-2xl font-black text-[#1a7bec] uppercase tracking-[0.2em] whitespace-nowrap md:rotate-[-90deg]">
                                    {service.title}
                                </span>
                            </div>

                            {/* Hover Content */}
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex flex-col items-center justify-center p-8 text-center h-full w-full">
                                <div className="w-16 h-16 rounded-full bg-[#1a7bec]/20 flex items-center justify-center text-3xl mb-6 shadow-[0_0_30px_rgba(26,123,236,0.3)]">
                                    {service.icon}
                                </div>
                                <h3 className="section-heading text-2xl text-white mb-4">{service.fullTitle}</h3>
                                <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href="#contact"
                                    className="mt-8 text-[#1a7bec] text-xs font-bold uppercase tracking-widest hover:underline"
                                >
                                    En savoir plus →
                                </a>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a7bec]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-4">Prêt à commencer ?</p>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-3 bg-white text-[#1a162d] hover:bg-[#1a7bec] hover:text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl"
                    >
                        Audit gratuit
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
