import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";
import ProgramPage from "../../pages/ProgramPage";
import NoticesPage from "../../pages/notice/NoticesPage";
import NoticeDetailPage from "../../pages/notice/NoticeDetailPage";
import NoticeRootLayoutPage from "../../pages/notice/NoticeRootLayoutPage";
import MembershipPage from "../../pages/MembershipPage";
import ContactPage from "../../pages/ContactPage";
import LoginPage from "../../pages/auth/LoginPage";
import JoinPage from "../../pages/auth/JoinPage";
import RootLayoutPage from "../../pages/user/RootLayoutPage";
import MyOrderPage from "../../pages/user/MyOrderPage";
import MyMileagePage from "../../pages/user/MyMileagePage";
import RegisterPage from "../../pages/auth/RegisterPage";
import MySettingPage from "../../pages/user/MySettingPage";
import MyOrderDetailPage from "../../pages/user/MyOrderDetail";

const bookRouteObjects: RouteObject[] = [
  {
    path: "book",
    children: [
      {
        index: true,
        element: <BookPage />,
      },
    ],
  },
];

const noticeRouteObjects: RouteObject[] = [
  {
    path: "notice",
    element: <NoticeRootLayoutPage />,
    children: [
      { index: true, element: <NoticesPage /> },
      { path: ":id", element: <NoticeDetailPage /> },
    ],
  },
];

const programRouteObjects: RouteObject[] = [
  {
    path: "program",
    children: [
      {
        index: true,
        element: <ProgramPage />,
      },
    ],
  },
];

const informationRouteObjects: RouteObject[] = [
  {
    path: "information",
    children: [
      { index: true, element: <MembershipPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
];

const userRouteObjects: RouteObject[] = [
  {
    path: "mypage",
    element: <RootLayoutPage />,
    children: [
      {
        path: "order",
        children: [
          { index: true, element: <MyOrderPage /> },
          { path: ":id", element: <MyOrderDetailPage /> },
        ],
      },
      { path: "mileage", element: <MyMileagePage /> },
      { path: "setting", element: <MySettingPage /> },
    ],
  },
];

const authRouteObjects: RouteObject[] = [
  { path: "login", element: <LoginPage /> },
  { path: "join", element: <JoinPage /> },
  { path: "register", element: <RegisterPage /> },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      ...authRouteObjects,
      ...userRouteObjects,
      ...bookRouteObjects,
      ...programRouteObjects,
      ...noticeRouteObjects,
      ...informationRouteObjects,
    ],
  },
]);
