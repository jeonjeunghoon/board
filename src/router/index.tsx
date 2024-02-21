import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Main from "../pages/Main";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Main />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
