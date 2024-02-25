import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import { generateNumberListByAscendingOrdered } from '../../../utils/list';
import PrevArrow from '../../../assets/svgs/arrow-prev.svg?react';
import NextArrow from '../../../assets/svgs/arrow-next.svg?react';
import DoublePrevArrow from '../../../assets/svgs/double-arrow-left.svg?react';
import DoubleNextArrow from '../../../assets/svgs/double-arrow-right.svg?react';
import PaginationButton from '../../PaginationButton';

type Props = {
  activePage: number;
  totalPage: number;
  handleChangePage: (number: number) => void;
  pageRange?: number;
};

export default function Pagination({
  activePage,
  totalPage,
  handleChangePage,
  pageRange = 10,
}: Props) {
  const startPageIndex = Math.floor((activePage - 1) / pageRange) * pageRange + 1;
  const pageLength = Math.min(pageRange, totalPage - startPageIndex + 1);
  const PageList = generateNumberListByAscendingOrdered(startPageIndex, pageLength);

  const HAS_MOVE_BUTTON = {
    SOLO: totalPage > 1,
    GROUP: totalPage > pageRange,
  };

  const IS_DISABLED = {
    CURRENT: (page: number) => activePage === page,
    PREVIOUS: activePage === 1,
    NEXT: activePage === totalPage,
    PREVIOUS_GROUP: startPageIndex < pageRange + 1,
    NEXT_GROUP: startPageIndex + pageRange > totalPage,
  };

  const MOVE_TO = {
    PAGE: (page: number) => handleChangePage(page),
    PREVIOUS_PAGE: () => handleChangePage(activePage - 1),
    NEXT_PAGE: () => handleChangePage(activePage + 1),
    PREVIOUS_GROUP_PAGE: () => handleChangePage(startPageIndex - pageRange),
    NEXT_GROUP_PAGE: () => handleChangePage(startPageIndex + pageRange),
  };

  if (!pageLength) return null;

  return (
    <div className={classNames('mr-auto flex self-center')}>
      {HAS_MOVE_BUTTON.GROUP && (
        <PaginationButton
          onClick={MOVE_TO.PREVIOUS_GROUP_PAGE}
          disabled={IS_DISABLED.PREVIOUS_GROUP}
          role='previous-group-button'
        >
          <DoublePrevArrow />
        </PaginationButton>
      )}

      {HAS_MOVE_BUTTON.SOLO && (
        <PaginationButton
          onClick={MOVE_TO.PREVIOUS_PAGE}
          disabled={IS_DISABLED.PREVIOUS}
          role='previous-button'
        >
          <PrevArrow />
        </PaginationButton>
      )}

      <ul className='flex' role='pagination'>
        {PageList.map((page) => {
          return (
            <li key={uuid()}>
              <PaginationButton
                onClick={() => MOVE_TO.PAGE(page)}
                disabled={IS_DISABLED.CURRENT(page)}
                isFocused={IS_DISABLED.CURRENT(page)}
                role='page-button'
              >
                {page}
              </PaginationButton>
            </li>
          );
        })}
      </ul>
      {HAS_MOVE_BUTTON.SOLO && (
        <PaginationButton
          onClick={MOVE_TO.NEXT_PAGE}
          disabled={IS_DISABLED.NEXT}
          role='next-button'
        >
          <NextArrow />
        </PaginationButton>
      )}

      {HAS_MOVE_BUTTON.GROUP && (
        <PaginationButton
          onClick={MOVE_TO.NEXT_GROUP_PAGE}
          disabled={IS_DISABLED.NEXT_GROUP}
          role='next-group-button'
        >
          <DoubleNextArrow />
        </PaginationButton>
      )}
    </div>
  );
}
