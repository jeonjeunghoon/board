import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PATHS } from '../constants/route';
import App from '../App';
import Main from '../pages/Main';
import Wiki from '../pages/Wiki';
import WikiCreator from '../pages/WikiCreator';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: PATHS.APP,
      element: <App />,
      children: [
        {
          path: PATHS.MAIN,
          element: <Main />,
        },
        {
          path: PATHS.WIKI,
          element: <Wiki />,
        },
        {
          path: PATHS.WIKI_CREATOR,
          element: <WikiCreator />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
