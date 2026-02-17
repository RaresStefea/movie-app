import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { WatchList, MoviesContainer, FocusedMovie } from "./components";
import App from "./app/App";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: MoviesContainer,
      },
      {
        path: "watchlist",
        Component: WatchList,
      },
      {
        path: "movie/:id",
        Component: FocusedMovie,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
