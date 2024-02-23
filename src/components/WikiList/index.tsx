import { Link } from 'react-router-dom';

import { Wiki } from '../../types/wiki';

type Props = {
  wikiList: Wiki[];
};

export default function WikiList({ wikiList }: Props) {
  if (!wikiList.length) return <div>위키가 존재하지 않아요.</div>;

  return (
    <div>
      <ul className='flex h-40 flex-col items-center justify-center bg-sky-500'>
        {wikiList.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={String(id)}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
