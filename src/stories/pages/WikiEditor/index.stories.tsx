import type { Meta, StoryObj } from '@storybook/react';

import WikiEditor from '../../../pages/WikiEditor';
import { useSetRecoilState } from 'recoil';
import { wikiListState } from '../../../states/wikiList';
import { generateWikiList } from '../../../../__mocks__/utils/wikiList';

const meta = {
  title: 'Pages/WikiEditor',
  component: WikiEditor,
  parameters: {
    layout: 'fullscreen',
    reactRouter: {
      location: {
        state: 1,
      },
    },
  },
  render: () => {
    const setWikiList = useSetRecoilState(wikiListState);

    setWikiList(generateWikiList(5));

    return <WikiEditor />;
  },
} satisfies Meta<typeof WikiEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
