import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddPost from "./pages/AddPost";
import AppLayout from "./pages/AppLayout";
import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";
import Home, { loader as postsLoader } from "./pages/Home";

import Details, { loader as detailsLoader } from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: postsLoader,

      },
      {
        path: "/post",
        element: <Home />,
      },
      {
        path: "/post/add",
        element: <AddPost />,
      },
      {
        path: "/post/:id",
        element: <Details />,
        loader: detailsLoader,
      },
      {
        path: "/post/edit",
        element: <EditPost />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
