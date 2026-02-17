import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/star-rating';

interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    rating: number;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Dr. Ahmed Benali',
        role: 'Dentist, Casablanca',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        quote: 'AfsimTech transformed my practice with a modern website and online booking. Patient appointments increased by 40%!',
    },
    {
        name: 'Fatima Zahra',
        role: 'Restaurant Owner, Marrakech',
        avatar: 'https://i.pravatar.cc/150?img=45',
        rating: 5,
        quote: 'The team delivered a beautiful, mobile-friendly website that showcases our menu perfectly. Reservations have never been easier.',
    },
    {
        name: 'Karim El Mansouri',
        role: 'Riad Manager, Fes',
        avatar: 'https://i.pravatar.cc/150?img=33',
        rating: 5,
        quote: 'Professional service and stunning results. Our online bookings tripled within the first month. Highly recommended!',
    },
];

export function Testimonials() {
    return (
        <section className="relative px-4 pb-20 pt-0">
            <div className="mx-auto max-w-6xl">
                {/* Section Divider */}
                <div className="mb-12 flex justify-center">
                    <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Section Title */}
                <h2 className="mb-12 text-center font-serif text-4xl font-bold text-white md:text-5xl">
                    What Our Clients Say
                </h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                        >
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-4">
                                    <Avatar className="h-12 w-12 border-2 border-white/20">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-white/60">{testimonial.role}</p>
                                    </div>
                                </div>

                                <StarRating rating={testimonial.rating} size="sm" className="mb-3" />

                                <p className="text-sm leading-relaxed text-white/70">
                                    "{testimonial.quote}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
