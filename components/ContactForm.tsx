'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    businessType: z.string().min(1, 'Please select a business type'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        console.log('Form submitted:', data);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
                            Full Name *
                        </label>
                        <input
                            {...register('name')}
                            type="text"
                            id="name"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
                            Email Address *
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            id="email"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            placeholder="john@example.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-white">
                            Phone Number *
                        </label>
                        <input
                            {...register('phone')}
                            type="tel"
                            id="phone"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            placeholder="+212 6 00 00 00 00"
                        />
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="businessType" className="mb-2 block text-sm font-semibold text-white">
                            Business Type *
                        </label>
                        <select
                            {...register('businessType')}
                            id="businessType"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                        >
                            <option value="" className="bg-[#1a0a3e]">Select your business type</option>
                            <option value="doctor" className="bg-[#1a0a3e]">Doctor / Medical Practice</option>
                            <option value="dentist" className="bg-[#1a0a3e]">Dentist</option>
                            <option value="lawyer" className="bg-[#1a0a3e]">Lawyer / Law Firm</option>
                            <option value="restaurant" className="bg-[#1a0a3e]">Restaurant</option>
                            <option value="spa" className="bg-[#1a0a3e]">Spa / Wellness Center</option>
                            <option value="riad" className="bg-[#1a0a3e]">Riad</option>
                            <option value="hotel" className="bg-[#1a0a3e]">Hotel</option>
                            <option value="real-estate" className="bg-[#1a0a3e]">Real Estate Agency</option>
                            <option value="other" className="bg-[#1a0a3e]">Other</option>
                        </select>
                        {errors.businessType && (
                            <p className="mt-1 text-sm text-red-400">{errors.businessType.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
                            Your Message *
                        </label>
                        <textarea
                            {...register('message')}
                            id="message"
                            rows={5}
                            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full bg-white text-[#1a0a3e] hover:bg-white/90"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {isSubmitted && (
                        <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-300">
                            Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </div>
                    )}
                </form>
            </CardContent>
        </Card>
    );
}
