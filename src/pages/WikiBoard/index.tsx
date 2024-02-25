import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames';

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

      <div className={classNames('flex pt-4 max-lg:px-6')}>
        <Pagination
          activePage={activePage}
          totalPage={totalPage}
          handleChangePage={setActivePage}
          pageRange={5}
        />
        <StyledLink className={classNames('ml-auto')} to={PATHS.WIKI.CREATOR} target='_blank'>
          위키 추가하기
        </StyledLink>
      </div>
    </div>
  );
}
