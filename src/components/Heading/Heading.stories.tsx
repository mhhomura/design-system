import {Meta, StoryObj} from '@storybook/react'
import {Heading, HeadingProps} from './Heading';

/* Configurações globais do componente */
export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading h2',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta <HeadingProps>


/* variações do componente */
export const Default: StoryObj<HeadingProps> = {}

export const Small : StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large : StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

/* Variação do componente utilizando o Slot fazendo que o componente Text possa ser outra coisa */
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading h1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}