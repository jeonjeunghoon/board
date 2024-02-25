import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '../../../../components/commons/Textarea';

const meta = {
  title: 'commons/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
