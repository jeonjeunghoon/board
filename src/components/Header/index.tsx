import { Link } from 'react-router-dom';

import { PATHS } from '../../constants/routes';

export default function Header() {
  return (
    <header className='flex h-14 justify-between border-b px-14 py-4'>
      <p className='cursor-default text-xl font-bold'>코딩허브 전증훈</p>
      <Link className='text-base font-medium' to={PATHS.WIKI.MAIN}>
        위키 게시판
      </Link>
    </header>
  );
}
