import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Wiki } from '../../types/wiki';
import EmptyWikiList from '../commons/EmptyWikiList';

type Props = {
  wikiList: Wiki[];
};

export default function WikiList({ wikiList }: Props) {
  if (!wikiList.length) return <EmptyWikiList />;

  return (
    <ul>
      {wikiList.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              className={classNames(
                'hover:text-secondaryTextHover hover:bg-secondaryTextBackgroundHover block w-full rounded-lg px-6 py-8 text-2xl font-thin',
              )}
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
