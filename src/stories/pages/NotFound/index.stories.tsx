import type { Meta, StoryObj } from '@storybook/react';

import NotFound from '../../../pages/NotFound';

const meta = {
  title: 'Pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
