import type { Meta, StoryObj } from '@storybook/react';
import PaginationButton from '../../../components/PaginationButton';

const meta = {
  title: 'components/PaginationButton',
  component: PaginationButton,
  tags: ['autodocs'],
  args: {
    isFocused: false,
    children: 1,
  },
} satisfies Meta<typeof PaginationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focused: Story = {
  args: {
    isFocused: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
