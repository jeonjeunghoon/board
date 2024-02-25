import type { Meta, StoryObj } from '@storybook/react';
import Title from '../../../components/Title';

const meta = {
  title: 'components/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    children: '제목',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cursor: 'default',
  },
};

export const NotAllowed: Story = {
  args: {
    cursor: 'not-allowed',
  },
};
