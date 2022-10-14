import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';

/* Configurações globais do componente */
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon> 
                <Envelope /> 
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your e-maill address" />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<TextInputRootProps>


/* variações do componente */
export const Default: StoryObj<TextInputRootProps> = {}

export const WithouIcon: StoryObj<TextInputRootProps> = {
    args: {
        children:  <TextInput.Input placeholder="Type your e-maill address" />
    }
}
