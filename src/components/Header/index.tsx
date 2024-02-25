import { Link } from 'react-router-dom';

import { PATHS } from '../../constants/routes';

export default function Header() {
  return (
    <header className='fixed left-0 right-0 top-0 flex h-14 justify-between border-b border-primary bg-secondaryBackground px-14 py-4'>
      <span className='cursor-default text-xl font-bold'>코딩허브 전증훈</span>
      <nav>
        <Link to={PATHS.WIKI.MAIN}>위키 게시판</Link>
      </nav>
    </header>
  );
}
