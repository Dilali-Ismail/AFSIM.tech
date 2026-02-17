import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    showValue?: boolean;
}

const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
};

export function StarRating({
    rating,
    maxRating = 5,
    size = 'md',
    className,
    showValue = false,
}: StarRatingProps) {
    return (
        <div className={cn('flex items-center gap-0.5', className)}>
            {Array.from({ length: maxRating }).map((_, index) => (
                <Star
                    key={index}
                    className={cn(
                        'text-amber-400',
                        sizeClasses[size],
                        index < rating ? 'fill-amber-400' : 'fill-none'
                    )}
                    aria-hidden="true"
                />
            ))}
            {showValue && (
                <span className="ml-2 text-sm text-muted-foreground">
                    {rating.toFixed(1)}
                </span>
            )}
            <span className="sr-only">{rating} out of {maxRating} stars</span>
        </div>
    );
}
