import { Link } from 'react-router-dom';

import { Wikis } from '../../types/wiki';

export default function Main() {
  const wikis: Wikis = {
    wikiPageList: [
      {
        id: 0,
        title: '제목1',
        content: '본문1',
      },
      {
        id: 1,
        title: '제목2',
        content: '본문2',
      },
      {
        id: 2,
        title: '제목3',
        content: '본문3',
      },
      {
        id: 3,
        title: '제목4',
        content: '본문4',
      },
      {
        id: 4,
        title: '제목5',
        content: '본문5',
      },
    ],
    page: 1,
    size: 5,
    totalElements: 5,
    totalPages: 1,
  };

  if (!wikis.totalElements) return <div>위키가 없습니다!</div>;

  return (
    <ul className='flex h-40 flex-col items-center justify-center bg-sky-500'>
      {wikis.wikiPageList.map(({ title }) => {
        return <Link to='wiki'>{title}</Link>;
      })}
    </ul>
  );
}
