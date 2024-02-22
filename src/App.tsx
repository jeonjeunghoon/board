import { Link, Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { PATHS } from './constants/routes';

function App() {
  return (
    <RecoilRoot>
      <div>
        <header>
          <Link to={PATHS.WIKI.MAIN}>위키 게시판</Link>
        </header>

        <Outlet />
      </div>
    </RecoilRoot>
  );
}

export default App;
