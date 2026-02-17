import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface AvatarData {
    src: string;
    alt: string;
    fallback?: string;
}

interface AvatarGroupProps {
    avatars: AvatarData[];
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
};

export function AvatarGroup({
    avatars,
    max = 5,
    size = 'md',
    className,
}: AvatarGroupProps) {
    const displayAvatars = avatars.slice(0, max);
    const remaining = Math.max(0, avatars.length - max);

    return (
        <div className={cn('flex -space-x-3', className)}>
            {displayAvatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    className={cn(
                        sizeClasses[size],
                        'border-2 border-white/20 ring-2 ring-indigo-500/30'
                    )}
                >
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                    <AvatarFallback>{avatar.fallback || avatar.alt.charAt(0)}</AvatarFallback>
                </Avatar>
            ))}
            {remaining > 0 && (
                <div
                    className={cn(
                        sizeClasses[size],
                        'flex items-center justify-center rounded-full border-2 border-white/20 bg-muted text-xs font-medium text-muted-foreground ring-2 ring-indigo-500/30'
                    )}
                >
                    +{remaining}
                </div>
            )}
        </div>
    );
}
