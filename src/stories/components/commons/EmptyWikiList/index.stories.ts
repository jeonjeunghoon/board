import type { Meta, StoryObj } from '@storybook/react';
import EmptyWikiList from '../../../../components/commons/EmptyWikiList';

const meta = {
  title: 'commons/EmptyWikiList',
  component: EmptyWikiList,
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyWikiList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
