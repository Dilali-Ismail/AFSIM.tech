'use client';

import React from 'react';

// Bokeh particle positions (deterministic, no random)
const bokehParticles = [
    { x: 15, y: 20, size: 3, delay: 0, duration: 8 },
    { x: 75, y: 10, size: 2, delay: 1.5, duration: 10 },
    { x: 40, y: 60, size: 4, delay: 3, duration: 12 },
    { x: 85, y: 45, size: 2, delay: 0.5, duration: 9 },
    { x: 25, y: 80, size: 3, delay: 2, duration: 11 },
    { x: 60, y: 25, size: 2, delay: 4, duration: 7 },
    { x: 90, y: 70, size: 3, delay: 1, duration: 13 },
    { x: 10, y: 55, size: 2, delay: 3.5, duration: 8 },
    { x: 50, y: 90, size: 4, delay: 2.5, duration: 10 },
    { x: 70, y: 80, size: 2, delay: 0.8, duration: 9 },
    { x: 30, y: 35, size: 3, delay: 4.5, duration: 11 },
    { x: 55, y: 50, size: 2, delay: 1.2, duration: 8 },
];

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base: very dark navy */}
            <div className="absolute inset-0" style={{ background: 'rgb(10, 15, 30)' }} />

            {/* Cinematic radial glow — brand blue center, breathing */}
            <div
                className="absolute inset-0 bg-glow-breathe"
                style={{
                    background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26, 123, 236, 0.45) 0%, rgba(26, 123, 236, 0.15) 35%, rgba(10, 15, 30, 0) 70%)`,
                }}
            />

            {/* Secondary depth glow — slightly offset for cinematic depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 40% 40% at 30% 70%, rgba(26, 80, 200, 0.18) 0%, transparent 60%),
                                 radial-gradient(ellipse 30% 30% at 75% 20%, rgba(26, 123, 236, 0.12) 0%, transparent 60%)`,
                }}
            />

            {/* Film grain texture */}
            <div className="absolute inset-0 bg-film-grain opacity-[0.035]" />

            {/* Bokeh particles */}
            {bokehParticles.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: 0,
                        filter: `blur(${p.size * 0.8}px)`,
                        animation: `bokeh-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
