import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Layout from './components/Layout';
import { PATHS } from './constants/routes';
import { useRedirect } from './hooks/useRedirect';

function App() {
  useRedirect(PATHS.APP, PATHS.WIKI.MAIN);

  return (
    <RecoilRoot>
      <Layout>
        <Outlet />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
