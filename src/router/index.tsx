import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PATHS } from '../constants/routes';
import App from '../App';
import WikiMain from '../pages/WikiMain';
import WikiContent from '../pages/WikiContent';
import WikiCreator from '../pages/WikiCreator';
import WikiBoard from '../pages/WikiBoard';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: PATHS.APP,
      element: <App />,
      children: [
        {
          path: PATHS.WIKI.MAIN,
          element: <WikiMain />,
          children: [
            {
              path: PATHS.WIKI.BOARD,
              element: <WikiBoard />,
            },
            {
              path: PATHS.WIKI.CONTENT,
              element: <WikiContent />,
            },
            {
              path: PATHS.WIKI.CREATOR,
              element: <WikiCreator />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
