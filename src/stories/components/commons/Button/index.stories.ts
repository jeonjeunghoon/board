import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../../../components/commons/Button';

const meta = {
  title: 'commons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '버튼',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
