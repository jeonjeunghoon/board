import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { targetWikiState } from '../states/wikiList';

export const useWiki = () => {
  const { pathname } = useLocation();
  const id = Number(pathname.split('/').pop());
  const wiki = useRecoilValue(targetWikiState({ targetId: id }));

  return wiki;
};
