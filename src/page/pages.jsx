import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import ErrorPage from "./errorPage";
import Post from "./post";

function Pages() {

    const router = createBrowserRouter([
        {
          path: "/deffect139.github.io/sert/",
          element: <App />,
          errorElement: <ErrorPage/>
        },
        {
          path: "/deffect139.github.io/sert/post/:id",
          element: <Post/>,
        },
    ]);

    return <RouterProvider router={router} />
  }
  
  export default Pages;
  