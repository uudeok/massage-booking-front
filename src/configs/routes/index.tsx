import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";

import HomePage from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";
import MassagePage from "../../pages/MassagePage";

const bookRouteObjects: RouteObject[] = [
  {
    path: "/book",
    children: [
      {
        index: true,
        element: <BookPage />,
      },
    ],
  },
];

const productRouteObjects: RouteObject[] = [
  {
    path: "/massage",
    children: [
      {
        index: true,
        element: <MassagePage />,
      },
      { path: ":id", element: <div>12345</div> },
    ],
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      ...bookRouteObjects,
      ...productRouteObjects,
    ],
  },
]);
