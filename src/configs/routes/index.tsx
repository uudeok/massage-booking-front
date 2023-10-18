import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";
import MassagePage from "../../pages/MassagePage";
import NoticesPage from "../../pages/NoticesPage";
import NoticeDetailPage from "../../pages/NoticeDetailPage";
import NoticeRootLayoutPage from "../../pages/NoticeRootLayoutPage";
import MembershipPage from "../../pages/MembershipPage";

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
    element: <NoticeRootLayoutPage />,
    children: [
      { index: true, element: <NoticesPage /> },
      { path: "/notice/:id", element: <NoticeDetailPage /> },
    ],
  },
];

const membershipRouteObjects: RouteObject[] = [
  {
    path: "/membership",
    children: [{ index: true, element: <MembershipPage /> }],
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
      ...membershipRouteObjects,
    ],
  },
]);
