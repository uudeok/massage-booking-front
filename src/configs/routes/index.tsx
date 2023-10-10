import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import ProductPage from "../../pages/ProductPage";
import HomePage from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";

const categoryRouteObjects: RouteObject[] = [
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
    path: "/product",
    children: [
      {
        index: true,
        element: <ProductPage />,
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
      ...categoryRouteObjects,
      ...productRouteObjects,
    ],
  },
]);
