import React from 'react';
import type { Metadata } from 'next';
import { RadialBackground } from '@/components/radial-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Calendar, TrendingUp, Smartphone, Wrench, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Services - AfsimTech | Web Development & Digital Solutions Morocco',
    description: 'Custom websites, online booking systems, SEO optimization, and mobile-first solutions for Moroccan businesses.',
};

export default function Services() {
    const services = [
        { icon: Globe, title: 'Custom Website Creation', description: 'Modern, responsive websites built with the latest technologies. Tailored to your brand and business needs.' },
        { icon: Calendar, title: 'Online Booking & Reservations', description: 'Integrated booking systems for appointments, reservations, and scheduling. Perfect for doctors, restaurants, and hotels.' },
        { icon: TrendingUp, title: 'SEO & Google Visibility', description: 'Local SEO optimization to help Moroccan customers find your business on Google. Boost your online presence.' },
        { icon: Smartphone, title: 'Mobile Optimization', description: 'Mobile-first designs that look stunning on all devices. Fast loading times and smooth user experience.' },
        { icon: Wrench, title: 'Maintenance & Support', description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly.' },
        { icon: ArrowRight, title: 'Website Modernization', description: 'Transform your outdated website into a modern, high-performing platform that converts visitors into customers.' },
    ];

    return (
        <>
            <RadialBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-4 pb-20 pt-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-serif text-3xl font-bold text-white md:text-5xl">
                        Tailored Web Solutions for Your Business
                    </h1>
                    <p className="text-base text-white/70 md:text-lg">
                        From custom websites to booking systems - we've got everything your Moroccan business needs to succeed online
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-12 text-center font-serif text-2xl font-bold text-white md:text-3xl">
                        What We Offer
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                                <CardHeader>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                                        <service.icon className="h-6 w-6 text-indigo-300" />
                                    </div>
                                    <CardTitle className="text-white">{service.title}</CardTitle>
                                    <CardDescription className="text-white/60">{service.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem-Solution Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-12 text-center font-serif text-2xl font-bold text-white md:text-3xl">
                        From Outdated to Outstanding
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-red-300">❌ Common Problems</CardTitle>
                                <ul className="mt-4 space-y-3 text-white/60">
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-red-400">•</span>
                                        <span>Website doesn't work on mobile phones</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-red-400">•</span>
                                        <span>Not showing up on Google searches</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-red-400">•</span>
                                        <span>No online booking system</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-red-400">•</span>
                                        <span>Slow loading times</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-red-400">•</span>
                                        <span>Outdated design that doesn't convert</span>
                                    </li>
                                </ul>
                            </CardHeader>
                        </Card>

                        <Card className="border-green-500/20 bg-green-500/5 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-green-300">✅ Our Solutions</CardTitle>
                                <ul className="mt-4 space-y-3 text-white/60">
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-green-400">•</span>
                                        <span>Fully responsive mobile-first designs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-green-400">•</span>
                                        <span>SEO optimized for local Morocco searches</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-green-400">•</span>
                                        <span>Integrated booking and reservation systems</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-green-400">•</span>
                                        <span>Lightning-fast performance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-green-400">•</span>
                                        <span>Modern designs that drive conversions</span>
                                    </li>
                                </ul>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Target Clients Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-12 text-center font-serif text-2xl font-bold text-white md:text-3xl">
                        Perfect For
                    </h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-white">🏥 Liberal Professions</CardTitle>
                                <ul className="mt-4 space-y-2 text-white/60">
                                    <li>• Doctors & Medical Practices</li>
                                    <li>• Dentists & Dental Clinics</li>
                                    <li>• Lawyers & Law Firms</li>
                                    <li>• Consultants & Advisors</li>
                                </ul>
                            </CardHeader>
                        </Card>

                        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-white">🏨 Local Services</CardTitle>
                                <ul className="mt-4 space-y-2 text-white/60">
                                    <li>• Restaurants & Cafés</li>
                                    <li>• Spas & Wellness Centers</li>
                                    <li>• Riads & Boutique Hotels</li>
                                    <li>• Real Estate Agencies</li>
                                </ul>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-3xl">
                        Ready to Get Started?
                    </h2>
                    <p className="mb-4 text-lg text-white/70">
                        Competitive pricing tailored to your needs
                    </p>
                    <p className="mb-8 text-xl font-bold text-white">
                        Starting from competitive rates - Book a Free Consultation
                    </p>
                    <Button asChild className="rounded-full bg-white text-[#1a0a3e] hover:bg-white/90" size="lg">
                        <a href="/contact">Get Your Free Quote Today</a>
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    );
}
