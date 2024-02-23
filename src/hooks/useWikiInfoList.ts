import { useRecoilValue } from 'recoil';

import { wikiListState } from '../states/wikiList';

export const useWikiInfoList = () => {
  const wikiList = useRecoilValue(wikiListState);

  return wikiList.map((wiki) => ({ title: wiki.title, id: wiki.id }));
};
