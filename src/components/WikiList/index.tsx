import { Link } from 'react-router-dom';

import { Wiki } from '../../types/wiki';

type Props = {
  wikiList: Wiki[];
};

export default function WikiList({ wikiList }: Props) {
  if (!wikiList.length) return <div>위키가 존재하지 않아요.</div>;

  return (
    <ul>
      {wikiList.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              className='hover:co hover:text block w-full rounded-lg px-6 py-8 text-2xl font-thin hover:bg-gray-100 hover:text-blue-700'
              to={String(id)}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
