import React from 'react';
import type { Metadata } from 'next';
import { RadialBackground } from '@/components/radial-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'About Us - AfsimTech | Your Trusted Digital Partners in Morocco',
    description: 'Meet the AfsimTech team - 5 passionate experts dedicated to modernizing Moroccan businesses with cutting-edge web solutions.',
};

export default function AboutUs() {
    return (
        <>
            <RadialBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-4 pb-20 pt-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-6xl">
                        Your Trusted Digital Partners in Morocco
                    </h1>
                    <p className="text-lg text-white/70 md:text-xl">
                        A passionate team of 5 experts committed to transforming local businesses through modern web solutions
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-8 text-center font-serif text-3xl font-bold text-white md:text-4xl">
                        Our Mission
                    </h2>
                    <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <p className="text-lg leading-relaxed text-white/70">
                                At AfsimTech, we're on a mission to <strong className="text-white">modernize outdated websites</strong> and transform them into
                                <strong className="text-white"> responsive, SEO-optimized, booking-ready platforms</strong> that help Moroccan businesses thrive in the digital age.
                                We believe every local business deserves a professional online presence that attracts customers and drives growth.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white md:text-4xl">
                        Meet Our Team
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                            <CardHeader>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10">
                                    <Users className="h-8 w-8 text-indigo-300" />
                                </div>
                                <CardTitle className="text-white">4 Developers</CardTitle>
                                <CardDescription className="text-white/60">
                                    Our skilled development team handles everything from design to deployment,
                                    ensuring your website is built with the latest technologies and best practices.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                            <CardHeader>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10">
                                    <Target className="h-8 w-8 text-violet-300" />
                                </div>
                                <CardTitle className="text-white">1 Communication Manager</CardTitle>
                                <CardDescription className="text-white/60">
                                    Our dedicated communication specialist manages social media outreach and ensures
                                    your brand message reaches the right audience across Morocco.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white md:text-4xl">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: Users, title: 'Collective Growth', description: 'We grow together with our clients, celebrating every milestone and success.' },
                            { icon: Target, title: 'Transparency', description: 'Clear communication and honest pricing - no hidden fees or surprises.' },
                            { icon: Heart, title: 'Commitment', description: 'Dedicated to delivering exceptional results on time, every time.' },
                            { icon: Award, title: 'Client Satisfaction', description: "Your success is our success - we're not satisfied until you are." },
                        ].map((value, index) => (
                            <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm text-center">
                                <CardHeader>
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10">
                                        <value.icon className="h-8 w-8 text-indigo-300" />
                                    </div>
                                    <CardTitle className="text-white">{value.title}</CardTitle>
                                    <CardDescription className="text-white/60">{value.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative px-4 pb-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl">
                        Our Vision
                    </h2>
                    <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <p className="mb-6 text-lg leading-relaxed text-white/70">
                                To become the <strong className="text-white">most trusted digital partner</strong> for service-based businesses across Morocco,
                                empowering them with modern web solutions that drive real business results.
                            </p>
                            <Button asChild className="rounded-full bg-white text-[#1a0a3e] hover:bg-white/90" size="lg">
                                <a href="/contact">Let's Build Together</a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </>
    );
}
