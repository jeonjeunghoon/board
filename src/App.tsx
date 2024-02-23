import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Layout from './components/Layout';

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Outlet />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
