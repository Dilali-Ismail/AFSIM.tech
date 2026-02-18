import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-[#0a1628]/80 text-white backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4 flex items-center">
                            <span className="serif text-xl tracking-tight">
                                AFSIM<span className="text-[#1a7bec]">TECH</span>
                            </span>
                        </div>
                        <p className="mb-4 text-sm text-white/50 leading-relaxed">
                            Votre partenaire digital de confiance pour des sites web modernes et performants au Maroc.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Linkedin, label: 'LinkedIn' },
                            ].map(({ icon: Icon, label }) => (
                                <a key={label} href="#" aria-label={label}
                                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#1a7bec] hover:border-[#1a7bec]/30 hover:bg-[#1a7bec]/10 transition-all duration-200">
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">Navigation</h3>
                        <ul className="space-y-2">
                            {[
                                { href: '#accueil', label: 'Accueil' },
                                { href: '#services', label: 'Services' },
                                { href: '#realisations', label: 'Réalisations' },
                                { href: '#avis', label: 'Avis clients' },
                                { href: '#contact', label: 'Contact' },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <a href={href} className="text-sm text-white/50 hover:text-white transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">Nos Services</h3>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li>Création de sites web</li>
                            <li>Référencement SEO</li>
                            <li>Sécurité & Maintenance</li>
                            <li>Applications web</li>
                            <li>Refonte de sites</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">Contact</h3>
                        <ul className="space-y-3">
                            {[
                                { icon: Mail, value: 'contact@afsimtech.ma', href: 'mailto:contact@afsimtech.ma' },
                                { icon: Phone, value: '+212 6 00 00 00 00', href: 'tel:+212600000000' },
                                { icon: MapPin, value: 'Casablanca, Maroc', href: '#' },
                            ].map(({ icon: Icon, value, href }) => (
                                <li key={value}>
                                    <a href={href} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors group">
                                        <Icon size={14} className="text-[#1a7bec] flex-shrink-0" />
                                        {value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/30">
                        © {currentYear} AfsimTech. Tous droits réservés. Fait avec ❤️ au Maroc.
                    </p>
                    <p className="text-xs text-white/20">
                        Mentions légales · Politique de confidentialité
                    </p>
                </div>
            </div>
        </footer>
    );
}
