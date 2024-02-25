import type { Meta, StoryObj } from '@storybook/react';
import WikiList from '../../../components/WikiList';
import { generateWikiList } from '../../../../__mocks__/utils/wikiList';

const wikiList = generateWikiList(5);

const meta = {
  title: 'components/WikiList',
  component: WikiList,
  tags: ['autodocs'],
  args: {
    wikiList,
  },
} satisfies Meta<typeof WikiList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
