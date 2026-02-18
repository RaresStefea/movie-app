import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { WatchList, MoviesContainer, PageNotFound } from "./components";
import App from "./app/App";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
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
        Component: MoviesContainer,
      },
      { path: "*", Component: PageNotFound },
    ],
  },
  { path: "*", Component: PageNotFound },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
