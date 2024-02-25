import type { Meta, StoryObj } from '@storybook/react';
import StyledLink from '../../../../components/commons/StyledLink';

const meta = {
  title: 'commons/StyledLink',
  component: StyledLink,
  tags: ['autodocs'],
  args: {
    to: '/wiki',
    variant: 'primary',
    children: '이동하기',
  },
} satisfies Meta<typeof StyledLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
