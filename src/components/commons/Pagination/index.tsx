import { generateNumberListByAscendingOrdered } from '../../../utils/list';

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

  const moveToPage = (page: number) => handleChangePage(page);
  const moveToPreviousPage = () => moveToPage(activePage - 1);
  const moveToNextPage = () => moveToPage(activePage + 1);
  const moveToPreviousPageGroup = () => moveToPage(startPageIndex - pageRange);
  const moveToNextPageGroup = () => moveToPage(startPageIndex + pageRange);

  return (
    <div className='flex gap-4'>
      <button onClick={moveToPreviousPageGroup} disabled={isDisabledPreviousGroup}>
        {'<<'}
      </button>
      <button onClick={moveToPreviousPage} disabled={isDisabledPrevious}>
        {'<'}
      </button>

      {PageList.map((page) => {
        return (
          <li key={page}>
            <button onClick={() => moveToPage(page)} disabled={activePage === page}>
              {page}
            </button>
          </li>
        );
      })}

      <button onClick={moveToNextPage} disabled={isDisabledNext}>
        {'>'}
      </button>
      <button onClick={moveToNextPageGroup} disabled={isDisabledNextGroup}>
        {'>>'}
      </button>
    </div>
  );
}
