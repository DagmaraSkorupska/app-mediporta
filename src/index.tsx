import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.ts";
import Home from "./Home.tsx";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
