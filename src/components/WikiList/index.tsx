import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import { wikiListState } from '../../states/wikiList';

export default function WikiList() {
  const wikiList = useRecoilValue(wikiListState);

  if (!wikiList.length) return <div>위키가 존재하지 않아요.</div>;

  return (
    <ul className='flex h-40 flex-col items-center justify-center bg-sky-500'>
      {wikiList.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
