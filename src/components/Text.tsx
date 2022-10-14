import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
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
export function Text({ size = 'md', children, asChild}: TextProps) {
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-lg': size === 'lg',
            }
        )}>
            {children}
        </Comp>
    )
}