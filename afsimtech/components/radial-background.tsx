import React from 'react';

export function RadialBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a3e] via-[#2d1166] to-[#1a0a3e]" />

            {/* Radial glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(99,60,255,0.25),transparent)]" />

            {/* Concentric circles - Mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                <div className="absolute h-[600px] w-[600px] rounded-full border border-violet-500/[0.07] shadow-[0_0_80px_rgba(120,80,255,0.05)]" />
                <div className="absolute h-[900px] w-[900px] -translate-x-[150px] -translate-y-[150px] rounded-full border border-violet-500/[0.05] shadow-[0_0_100px_rgba(120,80,255,0.04)]" />
                <div className="absolute h-[1200px] w-[1200px] -translate-x-[300px] -translate-y-[300px] rounded-full border border-violet-500/[0.03] shadow-[0_0_120px_rgba(120,80,255,0.03)]" />
                <div className="absolute h-[1500px] w-[1500px] -translate-x-[450px] -translate-y-[450px] rounded-full border border-violet-500/[0.02]" />
            </div>

            {/* Concentric circles - Tablet */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block lg:hidden">
                <div className="absolute h-[800px] w-[800px] rounded-full border border-violet-500/[0.07] shadow-[0_0_80px_rgba(120,80,255,0.05)]" />
                <div className="absolute h-[1200px] w-[1200px] -translate-x-[200px] -translate-y-[200px] rounded-full border border-violet-500/[0.05] shadow-[0_0_100px_rgba(120,80,255,0.04)]" />
                <div className="absolute h-[1600px] w-[1600px] -translate-x-[400px] -translate-y-[400px] rounded-full border border-violet-500/[0.03] shadow-[0_0_120px_rgba(120,80,255,0.03)]" />
                <div className="absolute h-[2000px] w-[2000px] -translate-x-[600px] -translate-y-[600px] rounded-full border border-violet-500/[0.02]" />
            </div>

            {/* Concentric circles - Desktop */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <div className="absolute h-[1000px] w-[1000px] rounded-full border border-violet-500/[0.07] shadow-[0_0_80px_rgba(120,80,255,0.05)]" />
                <div className="absolute h-[1500px] w-[1500px] -translate-x-[250px] -translate-y-[250px] rounded-full border border-violet-500/[0.05] shadow-[0_0_100px_rgba(120,80,255,0.04)]" />
                <div className="absolute h-[2000px] w-[2000px] -translate-x-[500px] -translate-y-[500px] rounded-full border border-violet-500/[0.03] shadow-[0_0_120px_rgba(120,80,255,0.03)]" />
                <div className="absolute h-[2500px] w-[2500px] -translate-x-[750px] -translate-y-[750px] rounded-full border border-violet-500/[0.02]" />
            </div>

            {/* Inner glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.07] blur-[60px]" />

            {/* Side glows */}
            <div className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/[0.05] blur-[100px]" />
            <div className="absolute -right-20 top-3/4 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[100px]" />

            {/* Sparkle accents */}
            <div className="absolute left-1/4 top-1/3 h-1 w-1 rounded-full bg-white/20" />
            <div className="absolute left-3/4 top-2/3 h-1 w-1 rounded-full bg-violet-300/40" />
            <div className="absolute left-1/2 top-1/4 h-0.5 w-0.5 rounded-full bg-white/30" />
            <div className="absolute left-2/3 top-1/2 h-0.5 w-0.5 rounded-full bg-violet-200/25" />
        </div>
    );
}
