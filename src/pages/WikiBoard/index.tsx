import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { paginatedWikiListState } from '../../states/wikiList';
import { PATHS } from '../../constants/routes';
import WikiList from '../../components/WikiList';
import Pagination from '../../components/commons/Pagination';

const DEFAULT_PAGINATION_NUMBER = 1;

export default function WikiBoard() {
  const [activePage, setActivePage] = useState(DEFAULT_PAGINATION_NUMBER);
  const { paginatedWikiList, totalPage } = useRecoilValue(
    paginatedWikiListState({ pageNumber: activePage }),
  );

  return (
    <div>
      <Link to={PATHS.WIKI.CREATOR} target='_blank'>
        새로운 위키 추가하기
      </Link>

      <WikiList wikiList={paginatedWikiList} />

      <Pagination activePage={activePage} totalPage={totalPage} handleChangePage={setActivePage} />
    </div>
  );
}
