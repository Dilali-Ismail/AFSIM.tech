'use client';

import React from 'react';

export function RadialBackground() {
    // Generate a few lines with slightly different timings
    const lines = [
        { d: "M-100,50 Q250,150 600,50 T1300,50", dur: "15s", delay: "0s", top: "10%" },
        { d: "M-100,60 Q300,10 700,60 T1400,60", dur: "18s", delay: "-2s", top: "25%" },
        { d: "M-100,50 Q350,100 800,50 T1500,50", dur: "20s", delay: "-5s", top: "40%" },
        { d: "M-100,70 Q400,20 900,70 T1600,70", dur: "22s", delay: "-1s", top: "55%" },
        { d: "M-100,40 Q450,120 1000,40 T1700,40", dur: "16s", delay: "-3s", top: "70%" },
        { d: "M-100,80 Q500,30 1100,80 T1800,80", dur: "25s", delay: "-8s", top: "85%" },
    ];

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base: very dark navy */}
            <div className="absolute inset-0" style={{ background: 'rgb(10, 15, 30)' }} />

            {/* Subtle Ambient Glow */}
            <div
                className="absolute inset-0 opacity-20 bg-glow-breathe"
                style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(26, 123, 236, 0.15) 0%, transparent 80%)`,
                }}
            />

            {/* Wavy Lines Pattern */}
            <div className="absolute inset-0 opacity-10">
                {lines.map((line, i) => (
                    <svg
                        key={i}
                        className="absolute w-full h-32"
                        style={{ top: line.top }}
                        viewBox="0 0 1440 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d={line.d}
                            fill="none"
                            stroke="rgba(26, 123, 236, 0.6)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        >
                            <animate
                                attributeName="d"
                                dur={line.dur}
                                delay={line.delay}
                                repeatCount="indefinite"
                                values={`
                                    ${line.d};
                                    M-100,80 Q400,-20 900,80 T1900,80;
                                    ${line.d}
                                `}
                            />
                        </path>
                    </svg>
                ))}
            </div>

            {/* Secondary diagonal grid / texture for depth (Optional but fits "lines" theme) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 123, 236, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 123, 236, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Film grain texture */}
            <div className="absolute inset-0 bg-film-grain opacity-[0.03]" />

            {/* Darkening Overlay for Content focus */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>
    );
}
