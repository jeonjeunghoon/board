import { selector } from 'recoil';

import { wikiListState } from './atom';
import { generateNewWikiId } from './utils';

export const wikiListNewIdState = selector({
  key: 'wikiListNewIdState',
  get: ({ get }) => generateNewWikiId(get(wikiListState)),
});
