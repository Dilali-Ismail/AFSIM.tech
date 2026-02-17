import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-[#1a0a3e]/50 text-white backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                                <span className="font-bold text-white">A</span>
                            </div>
                            <span className="font-serif text-2xl font-bold">AfsimTech</span>
                        </div>
                        <p className="mb-4 text-white/60">
                            Your trusted digital partner for modern websites and digital solutions in Morocco.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white/60 transition-colors hover:text-white" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-white/60 transition-colors hover:text-white" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-white/60 transition-colors hover:text-white" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white/60 transition-colors hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="text-white/60 transition-colors hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white/60 transition-colors hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/60 transition-colors hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Our Services</h3>
                        <ul className="space-y-2 text-white/60">
                            <li>Website Creation</li>
                            <li>Online Booking Systems</li>
                            <li>SEO Optimization</li>
                            <li>Mobile Development</li>
                            <li>Maintenance & Support</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Mail size={20} className="mt-1 flex-shrink-0 text-indigo-300" />
                                <a href="mailto:contact@afsimtech.ma" className="text-white/60 transition-colors hover:text-white">
                                    contact@afsimtech.ma
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone size={20} className="mt-1 flex-shrink-0 text-indigo-300" />
                                <a href="tel:+212600000000" className="text-white/60 transition-colors hover:text-white">
                                    +212 6 00 00 00 00
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="mt-1 flex-shrink-0 text-indigo-300" />
                                <span className="text-white/60">Casablanca, Morocco</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-white/10 pt-8 text-center text-white/60">
                    <p>&copy; {currentYear} AfsimTech. All rights reserved. Built with ❤️ in Morocco.</p>
                </div>
            </div>
        </footer>
    );
}
