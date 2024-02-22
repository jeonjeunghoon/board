import { useRecoilValue } from 'recoil';

import { targetWikiState } from '../states/wikiList';

export const useWiki = (id: number) => {
  const wiki = useRecoilValue(targetWikiState({ targetId: id }));

  return { id, title: wiki?.title, content: wiki?.content };
};
