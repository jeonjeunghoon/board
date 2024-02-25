import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../../../../components/commons/Pagination';

const meta = {
  title: 'commons/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    activePage: 1,
    totalPage: 11,
    handleChangePage: () => {},
    pageRange: 10,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Short: Story = {
  args: {
    pageRange: 5,
  },
};

export const OnlyOne: Story = {
  args: {
    activePage: 1,
    totalPage: 1,
    pageRange: 1,
  },
};
