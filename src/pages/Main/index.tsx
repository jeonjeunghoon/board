import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { PATHS } from '../../constants/route';
import { wikiListState } from '../../states/wikiList/atom';

export default function Main() {
  const wikiList = useRecoilValue(wikiListState);

  return (
    <>
      <Link to={PATHS.WIKI_CREATOR} target='_blank'>
        새로운 위키 추가하기
      </Link>

      {wikiList.length ? (
        <ul className='flex h-40 flex-col items-center justify-center bg-sky-500'>
          {wikiList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={PATHS.WIKI}>{title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>위키가 존재하지 않아요.</div>
      )}
    </>
  );
}
