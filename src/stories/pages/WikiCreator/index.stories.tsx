import type { Meta, StoryObj } from '@storybook/react';

import WikiCreator from '../../../pages/WikiCreator';
import { useSetRecoilState } from 'recoil';
import { wikiListState } from '../../../states/wikiList';
import { generateWikiList } from '../../../../__mocks__/utils/wikiList';

const meta = {
  title: 'Pages/WikiCreator',
  component: WikiCreator,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const setWikiList = useSetRecoilState(wikiListState);

    setWikiList(generateWikiList(5));

    return <WikiCreator />;
  },
} satisfies Meta<typeof WikiCreator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
