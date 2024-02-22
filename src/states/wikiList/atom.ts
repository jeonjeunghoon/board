import { atom } from 'recoil';

import { Wiki } from '../../types/wiki';
import { localStorageEffect } from '../utils';

export const wikiListState = atom<Wiki[]>({
  key: 'wikiList',
  default: [],
  effects: [localStorageEffect<Wiki[]>('wiki_list')],
});
