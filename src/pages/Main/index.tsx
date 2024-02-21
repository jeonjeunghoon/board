import { Link } from 'react-router-dom';

export default function Main() {
  const wikiList = [
    {
      id: 0,
      title: '제목1',
      contents: '본문1',
    },
    {
      id: 1,
      title: '제목2',
      contents: '본문2',
    },
    {
      id: 2,
      title: '제목3',
      contents: '본문3',
    },
  ];

  return (
    <ul className='flex h-40 flex-col items-center justify-center bg-sky-500'>
      {wikiList.map(({ title }) => {
        return <Link to='wiki'>{title}</Link>;
      })}
    </ul>
  );
}
