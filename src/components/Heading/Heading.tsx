import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    asChild?: boolean;
}

/* 
    clsx permite passar classes do tailwind de acordo com paramentros 
    igual a style={{backgoud: online ? 'green' : 'red'}}

    Slot permite mudar o tipo do componente tbm de acordo com paramentros, um <button /> 
    pode se tornar um <link /> por exemplo.
*/
export function Heading({ size = 'md', children, asChild}: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    return(
        <Comp className={clsx(
            'text-gray-100 font-bold font-sans',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            }
        )}>
            {children}
        </Comp>
    )
}