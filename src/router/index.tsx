import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Main from '../pages/Main';
import Wiki from '../pages/Wiki';
import WikiCreator from '../pages/WikiCreator';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Main />,
        },
        {
          path: 'wiki',
          element: <Wiki />,
        },
        {
          path: 'wiki-creator',
          element: <WikiCreator />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
