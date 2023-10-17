import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";
import MassagePage from "../../pages/MassagePage";
import NoticesPage from "../../pages/NoticesPage";
import NoticeDetailPage from "../../pages/NoticeDetailPage";

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

const massageRouteObjects: RouteObject[] = [
  {
    path: "/massage",
    children: [
      {
        index: true,
        element: <MassagePage />,
      },
    ],
  },
];

const noticeRouteObjects: RouteObject[] = [
  {
    path: "/notice",
    children: [
      { index: true, element: <NoticesPage /> },
      { path: "/notice/:id", element: <NoticeDetailPage /> },
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
      ...massageRouteObjects,
      ...noticeRouteObjects,
    ],
  },
]);
