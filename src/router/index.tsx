import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Main from '../pages/Main';
import Wiki from '../pages/Wiki';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
