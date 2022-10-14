import {Meta, StoryObj} from '@storybook/react'
import {Text, TextProps} from './Text';

/* Configurações globais do componente */
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Texto',
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
} as Meta <TextProps>


/* variações do componente */
export const Default: StoryObj<TextProps> = {}

export const Small : StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Large : StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

/* Variação do componente utilizando o Slot fazendo que o componente Text possa ser outra coisa */
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Paragrafo de texto</p>
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