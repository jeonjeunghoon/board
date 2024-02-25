import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../../components/Header';

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/wiki',
      },
    }),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
