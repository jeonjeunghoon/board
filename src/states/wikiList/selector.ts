import { selector, selectorFamily } from 'recoil';

import { wikiListState } from './atom';
import { calculateTotalPage, findWikiById, generateNewWikiId, slicedWikiList } from './utils';

export const wikiListNewIdState = selector({
  key: 'wikiListNewIdState',
  get: ({ get }) => generateNewWikiId(get(wikiListState)),
});

export const targetWikiState = selectorFamily({
  key: 'targetWikiState',
  get:
    ({ targetId }: { targetId: number }) =>
    ({ get }) =>
      findWikiById(get(wikiListState), targetId),
});

export const paginatedWikiListState = selectorFamily({
  key: 'paginatedWikiListState',
  get:
    ({ pageNumber }: { pageNumber: number }) =>
    ({ get }) => {
      const wikiList = get(wikiListState);

      return {
        paginatedWikiList: slicedWikiList(wikiList, pageNumber),
        totalPage: calculateTotalPage(wikiList),
      };
    },
});
