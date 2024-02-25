import type { Meta, StoryObj } from '@storybook/react';

import WikiBoard from '../../../pages/WikiBoard';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { wikiListState } from '../../../states/wikiList';
import { generateWikiList } from '../../../../__mocks__/utils/wikiList';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Pages/WikiBoard',
  component: WikiBoard,
  parameters: {
    layout: 'fullscreen',
    reactRouter: reactRouterParameters({
      location: {
        path: '/',
      },
    }),
  },
  render: () => {
    const setWikiList = useSetRecoilState(wikiListState);

    setWikiList(generateWikiList(5));

    return <WikiBoard />;
  },
} satisfies Meta<typeof WikiBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyWiki: Story = {
  render: () => {
    useResetRecoilState(wikiListState)();

    return <WikiBoard />;
  },
};
