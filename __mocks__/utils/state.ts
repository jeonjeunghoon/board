import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Wiki } from '../../src/types/wiki';
import { wikiListState } from '../../src/states/wikiList';

type InjectTestingRecoilState = {
  wikiList: Wiki[];
};

export const InjectTestingRecoilState = ({ wikiList }: InjectTestingRecoilState) => {
  const setWikiList = useSetRecoilState(wikiListState);

  useEffect(() => {
    setWikiList(wikiList);
  }, [setWikiList, wikiList]);

  return null;
};
