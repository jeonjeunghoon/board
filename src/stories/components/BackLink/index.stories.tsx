import type { Meta, StoryObj } from '@storybook/react';
import BackLink from '../../../components/BackLink';

const meta = {
  title: 'components/BackLink',
  component: BackLink,
  tags: ['autodocs'],
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
