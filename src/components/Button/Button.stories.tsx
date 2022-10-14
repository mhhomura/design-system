import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from './Button';

/* Configurações globais do componente */
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {}
} as Meta<ButtonProps>


/* variações do componente */
export const Default: StoryObj<ButtonProps> = {}
