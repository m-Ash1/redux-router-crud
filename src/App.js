import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";

import AddPost from "./pages/AddPost";
import AppLayout from "./pages/AppLayout";
import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";
import Home, { loader as postsLoader } from "./pages/Home";

import Details from "./pages/Details";
import { action as postDeleteAction } from "./pages/Home";

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
        loader: postsLoader,
      },
      {
        path: "/post/add",
        element: <AddPost />,
      },
      {
        path: "/post/delete/:id",
        action: postDeleteAction,
      },
      {
        path: "/post/:id",
        element: <Details />,
        // loader: detailsLoader,
      },
      {
        path: "/post/edit",
        element: <EditPost />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
