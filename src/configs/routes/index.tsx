import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";
import HomePage from "../../pages/HomePage";

const categoryRouteObjects: RouteObject[] = [
  {
    path: "/category",
    children: [
      {
        index: true,
        element: <CategoryPage />,
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
