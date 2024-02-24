import classNames from 'classnames';

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

  const isDisabledPrevious = activePage === 1;
  const isDisabledNext = activePage === totalPage;
  const isDisabledPreviousGroup = startPageIndex < pageRange + 1;
  const isDisabledNextGroup = startPageIndex + pageRange > totalPage;
  const hasGroupButton = totalPage > pageRange;

  const moveToPage = (page: number) => handleChangePage(page);
  const moveToPreviousPage = () => moveToPage(activePage - 1);
  const moveToNextPage = () => moveToPage(activePage + 1);
  const moveToPreviousPageGroup = () => moveToPage(startPageIndex - pageRange);
  const moveToNextPageGroup = () => moveToPage(startPageIndex + pageRange);

  if (!totalPage) return null;

  return (
    <div className={classNames('mr-auto flex self-end')}>
      {hasGroupButton && (
        <PaginationButton
          onClick={moveToPreviousPageGroup}
          disabled={isDisabledPreviousGroup}
          role='previous-group-button'
        >
          <DoublePrevArrow />
        </PaginationButton>
      )}

      {totalPage > 1 && (
        <PaginationButton
          onClick={moveToPreviousPage}
          disabled={isDisabledPrevious}
          role='previous-button'
        >
          <PrevArrow />
        </PaginationButton>
      )}

      <ul className='flex' role='pagination'>
        {PageList.map((page) => {
          const isCurrentPage = activePage === page;

          return (
            <li key={page}>
              <PaginationButton
                onClick={() => moveToPage(page)}
                disabled={isCurrentPage}
                isFocused={isCurrentPage}
                role='page-button'
              >
                {page}
              </PaginationButton>
            </li>
          );
        })}
      </ul>
      {totalPage > 1 && (
        <PaginationButton onClick={moveToNextPage} disabled={isDisabledNext} role='next-button'>
          <NextArrow />
        </PaginationButton>
      )}

      {hasGroupButton && (
        <PaginationButton
          onClick={moveToNextPageGroup}
          disabled={isDisabledNextGroup}
          role='next-group-button'
        >
          <DoubleNextArrow />
        </PaginationButton>
      )}
    </div>
  );
}
