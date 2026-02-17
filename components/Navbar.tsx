'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about-us', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1a0a3e]/80 backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                            <span className="font-bold text-white">A</span>
                        </div>
                        <span className="font-serif text-2xl font-bold text-white">AfsimTech</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-medium text-white/70 transition-colors hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="rounded-full bg-white text-[#1a0a3e] hover:bg-white/90">
                            <Link href="/contact">Get Started</Link>
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
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-2 font-medium text-white/70 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="px-4">
                                <Button asChild className="w-full rounded-full bg-white text-[#1a0a3e] hover:bg-white/90">
                                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                        Get Started
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
