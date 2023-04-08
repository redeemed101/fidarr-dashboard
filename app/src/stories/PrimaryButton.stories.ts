import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from '../Presentation/Common/buttons';

const meta = {
    title: 'Fidarr/PrimaryButton',
    component: PrimaryButton,
    tags: ['autodocs'],
    argTypes: {
     
    },
  } satisfies Meta<typeof PrimaryButton>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const primary : Story = {
       args: {
         height : "0",
         width : "1/2",
         title: "Login",
         padX: 4,
         padY: 2
       }
  }
  export const primary2 : Story = {
    args: {
      height : "0",
      width : "20",
      title: "Login",
      padX: 4,
      padY: 2
    }
}