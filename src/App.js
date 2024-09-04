import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";

import AddPost from "./pages/AddPost";
import AppLayout from "./pages/AppLayout";
import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Home />,
      },
      {
        path: "/post/add",
        element: <AddPost />,
      },

      {
        path: "/post/delete/:id",
      },
      {
        path: "/post/:id",
        element: <Details />,
      },
      {
        path: "/post/:id/edit",
        element: <EditPost />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
