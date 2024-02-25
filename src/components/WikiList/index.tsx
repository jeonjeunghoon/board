import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import { Wiki } from '../../types/wiki';
import EmptyWikiList from '../commons/EmptyWikiList';

type Props = {
  wikiList: Wiki[];
};

export default function WikiList({ wikiList }: Props) {
  if (!wikiList.length) return <EmptyWikiList />;

  return (
    <ul className={classNames('flex-grow')}>
      {wikiList.map(({ id, title }) => {
        return (
          <li key={uuid()}>
            <Link
              className={classNames(
                'block w-full rounded-lg px-6 py-8 text-2xl font-thin hover:bg-secondaryBackgroundHover hover:text-secondaryTextHover',
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
