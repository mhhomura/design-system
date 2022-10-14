import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: React.ReactNode;
    asChild?: boolean;
}

/* 
    clsx permite passar classes do tailwind de acordo com paramentros 
    igual a style={{backgoud: online ? 'green' : 'red'}}

    Slot permite mudar o tipo do componente tbm de acordo com paramentros, um <button /> 
    pode se tornar um <link /> por exemplo.
*/
export function Button({children, asChild}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black txt-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'
        )}>
            {children}
        </Comp>
    )
}