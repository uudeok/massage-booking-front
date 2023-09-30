import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";

const categoryRouteObjects: RouteObject[] = [
  {
    path: "/category",
    children: [
      {
        index: true,
        element: <div>category</div>,
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
        element: <div>product</div>,
      },
      { path: ":id", element: <div>12345</div> },
    ],
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...categoryRouteObjects, ...productRouteObjects],
  },
]);
