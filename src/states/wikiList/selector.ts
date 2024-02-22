import { selector, selectorFamily } from 'recoil';

import { wikiListState } from './atom';
import { findWikiById, generateNewWikiId } from './utils';

export const wikiListNewIdState = selector({
  key: 'wikiListNewIdState',
  get: ({ get }) => generateNewWikiId(get(wikiListState)),
});

export const targetWikiState = selectorFamily({
  key: 'targetCartProductState',
  get:
    ({ targetId }: { targetId: number }) =>
    ({ get }) =>
      findWikiById(get(wikiListState), targetId),
});
