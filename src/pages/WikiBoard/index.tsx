import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { paginatedWikiListState } from '../../states/wikiList';
import { PATHS } from '../../constants/routes';
import Title from '../../components/Title';
import WikiList from '../../components/WikiList';
import Pagination from '../../components/commons/Pagination';
import StyledLink from '../../components/commons/StyledLink';

const DEFAULT_PAGINATION_NUMBER = 1;

export default function WikiBoard() {
  const [activePage, setActivePage] = useState(DEFAULT_PAGINATION_NUMBER);
  const { paginatedWikiList, totalPage } = useRecoilValue(
    paginatedWikiListState({ pageNumber: activePage }),
  );

  return (
    <div className='flex h-full flex-col'>
      <Title cursor='default'>위키 게시판</Title>

      <WikiList wikiList={paginatedWikiList} />

      <div className='mt-auto flex w-full justify-between self-start'>
        <Pagination
          activePage={activePage}
          totalPage={totalPage}
          handleChangePage={setActivePage}
        />
        <StyledLink to={PATHS.WIKI.CREATOR} target='_blank'>
          위키 추가하기
        </StyledLink>
      </div>
    </div>
  );
}
