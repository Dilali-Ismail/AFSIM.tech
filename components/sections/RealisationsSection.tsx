'use client';

import React, { useState } from 'react';

const projects = [
    {
        title: 'LUXDRIVE',
        category: 'Location de voitures',
        description: 'Plateforme premium de location de voitures de luxe.',
        color: '230, 57, 70', // Red
        link: 'https://carrentle.vercel.app/',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Cabinet El Mansouri',
        category: 'Dentaire',
        description: 'Système de réservation en ligne pour patients. +40% de leads.',
        color: '26, 123, 236', // Blue
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Restaurant Dar Zitoun',
        category: 'Gastronomie',
        description: 'Menu digital interactif et réservations simplifiées.',
        color: '16, 185, 129', // Emerald
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Riad Andalous',
        category: 'Hôtellerie',
        description: 'Refonte SEO locale. Page 1 Google en 30 jours.',
        color: '139, 92, 246', // Purple/Violet
        image: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Cabinet Benali',
        category: 'Juridique',
        description: 'Gestion digitale des dossiers et portail client sécurisé.',
        color: '249, 115, 22', // Orange
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Spa Marrakech Luxe',
        category: 'Bien-être',
        description: 'Expérience immersive pour la prise de rendez-vous spa.',
        color: '236, 72, 153', // Pink
        image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Atlas Immobilier',
        category: 'Immobilier',
        description: 'Plateforme de recherche de biens avec CRM intégré.',
        color: '14, 165, 233', // Cyan
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Afsim E-shop',
        category: 'E-commerce',
        description: 'Solution complète pour la vente en ligne de produits artisanaux.',
        color: '142, 249, 252', // Light Blue
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    },
];

export function RealisationsSection() {
    const [paused, setPaused] = useState(false);

    return (
        <section id="realisations" className="relative py-24 px-4 overflow-hidden min-h-[850px] flex flex-col justify-center">
            {/* Header */}
            <div className="text-center mb-10 z-10">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#1a7bec]/30 bg-[#1a7bec]/10 text-[#1a7bec] text-xs font-bold uppercase tracking-widest mb-5">
                    Nos Réalisations
                </span>
                <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
                    Projets qui <span className="text-[#1a7bec]">parlent d'eux-mêmes</span>
                </h2>
                <p className="text-white/50 text-base max-w-xl mx-auto">
                    Explorez nos dernières créations digitales à travers cette vitrine interactive.
                </p>
            </div>

            {/* 3D Carousel Wrapper */}
            <div className="carousel-wrapper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div
                    className="carousel-inner"
                    style={{
                        '--quantity': projects.length,
                        animationPlayState: paused ? 'paused' : 'running'
                    } as React.CSSProperties}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="carousel-card"
                            style={{
                                '--index': index,
                                '--color-card': project.color
                            } as React.CSSProperties}
                            onClick={() => {
                                if (project.link) window.open(project.link, '_blank');
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="carousel-img-overlay" />

                            <div className="carousel-content">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/50 border border-white/20 mb-2 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-black text-white mb-1">{project.title}</h3>
                                <p className="text-xs text-white/70 leading-relaxed">
                                    {project.description}
                                </p>
                                {project.link && (
                                    <span className="mt-3 inline-block text-[10px] font-bold text-[#1a7bec] uppercase tracking-widest">
                                        Voir live →
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hint */}
            <div className="mt-10 text-center opacity-30 animate-pulse">
                <p className="text-xs text-white uppercase tracking-[0.3em]">Survolez pour mettre en pause</p>
            </div>
        </section>
    );
}
