import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../../../components/commons/Layout';

const meta = {
  title: 'commons/Layout',
  component: Layout,
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
