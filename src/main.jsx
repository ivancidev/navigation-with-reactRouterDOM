import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/Contacts";
import About from "./pages/About";
import Blog from "./pages/Blog";
import React from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserProvider from "./context/UserProvider";
import Register from "./pages/Register";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
    ],
  },
  // Con path dinamico
  // {
  //   path: '/blog/:id',
  //   element: <Blog />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
