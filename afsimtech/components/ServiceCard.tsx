import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

/**
 * ServiceCard Component
 * Displays service information with icon
 * Used in services grid layouts
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <Card>
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center mb-4">
                    <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-primary mb-3">{title}</h3>
                <p className="text-neutral">{description}</p>
            </div>
        </Card>
    );
};

export default ServiceCard;
