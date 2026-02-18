'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass = (field: string) => `
        w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30
        outline-none transition-all duration-200
        ${focused === field
            ? 'border-[#1a7bec] bg-[#1a7bec]/5 shadow-[0_0_0_3px_rgba(26,123,236,0.15)]'
            : 'border-white/10 hover:border-white/20'
        }
    `;

    return (
        <section id="contact" className="relative py-24 px-4 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side — Text Content */}
                    <div className="flex flex-col gap-6">
                        <span className="inline-block w-fit px-4 py-1.5 rounded-full border border-[#1a7bec]/30 bg-[#1a7bec]/10 text-[#1a7bec] text-xs font-bold uppercase tracking-widest">
                            Contact
                        </span>
                        <h2 className="serif text-4xl md:text-6xl text-white leading-[1.1]">
                            Une question ou un <span className="text-[#1a7bec]">projet ambitieux</span> ? Notre équipe est à votre écoute
                        </h2>
                        <p className="text-white/40 text-sm max-w-md">
                            Expertise technique et accompagnement sur-mesure pour donner vie à vos ambitions digitales au Maroc.
                        </p>
                    </div>

                    {/* Right Side — Simplified Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
                        {/* Decorative glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1a7bec]/10 rounded-full blur-3xl group-hover:bg-[#1a7bec]/20 transition-all duration-500" />

                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                    <CheckCircle size={32} className="text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Message envoyé !</h3>
                                <p className="text-white/50 text-sm max-w-xs">
                                    Merci pour votre message. Notre équipe vous contactera sous 24h.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                                    className="mt-2 text-[#1a7bec] text-sm font-medium hover:underline"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                                <div>
                                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block font-bold">Nom complet</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="votre nom"
                                        value={formData.name}
                                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused(null)}
                                        className={inputClass('name')}
                                    />
                                </div>

                                <div>
                                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block font-bold">Email professionnel</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="votre@email.com"
                                        value={formData.email}
                                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused(null)}
                                        className={inputClass('email')}
                                    />
                                </div>

                                <div>
                                    <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block font-bold">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Décrivez brièvement votre besoin..."
                                        value={formData.message}
                                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                        className={`${inputClass('message')} resize-none`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1a7bec] hover:bg-[#1565d8] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.01] flex items-center justify-center gap-2"
                                >
                                    Envoyer
                                    <Send size={14} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
