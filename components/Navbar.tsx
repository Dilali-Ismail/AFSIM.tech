'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (const section of [...sections].reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.getElementById(href.replace('#', ''));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a0a3e]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo - restored with serif Font and no icon */}
                    <a href="#accueil" onClick={(e) => handleNavClick(e, '#accueil')} className="flex items-center">
                        <span className="serif text-xl tracking-tight text-white font-black">
                            AFSIM<span className="text-[#1a7bec]">TECH</span>
                        </span>
                    </a>

                    {/* Desktop Nav Links — centered */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1.5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === link.href.replace('#', '')
                                        ? 'bg-[#1a7bec] text-white shadow-md shadow-blue-500/30'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Button asChild className="rounded-full bg-white text-[#1a0a3e] hover:bg-white/90">
                            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Audit gratuit</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-white md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="border-t border-white/10 py-4 md:hidden">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="px-4 py-2 font-medium text-white/70 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="px-4">
                                <Button asChild className="w-full rounded-full bg-white text-[#1a0a3e] hover:bg-white/90">
                                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                                        Audit gratuit
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
