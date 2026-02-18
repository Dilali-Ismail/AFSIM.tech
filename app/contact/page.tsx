import React from 'react';
import type { Metadata } from 'next';
import { RadialBackground } from '@/components/radial-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - AfsimTech | Get Your Free Quote Today',
    description: 'Ready to modernize your online presence? Contact AfsimTech for a free consultation. We serve businesses across Morocco.',
};

export default function Contact() {
    return (
        <>
            <RadialBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-4 pb-20 pt-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-serif text-3xl font-bold text-white md:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="text-base text-white/70 md:text-lg">
                        Ready to take your business to the next level? Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div>
                            <h2 className="mb-6 font-serif text-2xl font-bold text-white">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="mb-6 font-serif text-2xl font-bold text-white">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <Mail size={28} className="mt-1 flex-shrink-0 text-indigo-300" />
                                            <div>
                                                <CardTitle className="text-white">Email</CardTitle>
                                                <a
                                                    href="mailto:contact@afsimtech.ma"
                                                    className="text-white/60 transition-colors hover:text-white"
                                                >
                                                    contact@afsimtech.ma
                                                </a>
                                                <CardDescription className="mt-1 text-white/40">
                                                    We typically respond within 24 hours
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>

                                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <Phone size={28} className="mt-1 flex-shrink-0 text-indigo-300" />
                                            <div>
                                                <CardTitle className="text-white">Phone</CardTitle>
                                                <a
                                                    href="tel:+212600000000"
                                                    className="text-white/60 transition-colors hover:text-white"
                                                >
                                                    +212 6 00 00 00 00
                                                </a>
                                                <CardDescription className="mt-1 text-white/40">
                                                    Monday - Friday, 9:00 AM - 6:00 PM
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>

                                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <MapPin size={28} className="mt-1 flex-shrink-0 text-indigo-300" />
                                            <div>
                                                <CardTitle className="text-white">Location</CardTitle>
                                                <p className="text-white/60">Casablanca, Morocco</p>
                                                <CardDescription className="mt-1 text-white/40">
                                                    Serving businesses across Morocco
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>

                                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <Clock size={28} className="mt-1 flex-shrink-0 text-indigo-300" />
                                            <div>
                                                <CardTitle className="text-white">Business Hours</CardTitle>
                                                <div className="space-y-1 text-white/60">
                                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                                    <p>Sunday: Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <HelpCircle size={48} className="mx-auto mb-4 text-indigo-300" />
                        <h2 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: 'How long does it take to build a website?',
                                answer: 'Typically, a standard business website takes 2-4 weeks from start to finish. More complex projects with booking systems or custom features may take 4-6 weeks. We will provide you with a detailed timeline during our initial consultation.',
                            },
                            {
                                question: 'What is the process?',
                                answer: '1. Free Consultation: We discuss your needs and goals\n2. Proposal & Quote: We send you a detailed proposal with pricing\n3. Design & Development: We build your website with regular updates\n4. Review & Revisions: You review and request any changes\n5. Launch & Support: We launch your site and provide ongoing support',
                            },
                            {
                                question: 'Do you provide hosting and domain services?',
                                answer: 'Yes! We can handle everything from domain registration to hosting setup. We work with reliable hosting providers to ensure your website is fast, secure, and always accessible.',
                            },
                            {
                                question: 'Can you help with an existing website?',
                                answer: 'Absolutely! We specialize in modernizing outdated websites. Whether you need a complete redesign, mobile optimization, or just want to add new features like online booking, we can help transform your existing site.',
                            },
                        ].map((faq, index) => (
                            <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-white">{faq.question}</CardTitle>
                                    <CardDescription className="whitespace-pre-line text-white/60">
                                        {faq.answer}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
