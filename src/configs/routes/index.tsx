import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import BookPage from "../../pages/BookPage";
import ProgramPage from "../../pages/ProgramPage";
import NoticesPage from "../../pages/NoticesPage";
import NoticeDetailPage from "../../pages/NoticeDetailPage";
import NoticeRootLayoutPage from "../../pages/NoticeRootLayoutPage";
import MembershipPage from "../../pages/MembershipPage";
import ContactPage from "../../pages/ContactPage";
import LoginPage from "../../pages/auth/LoginPage";
import JoinPage from "../../pages/auth/JoinPage";
import RootLayoutPage from "../../pages/user/RootLayoutPage";
import MyBookPage from "../../pages/user/MyBookPage";
import MyMileagePage from "../../pages/user/MyMileagePage";
import RegisterPage from "../../pages/auth/RegisterPage";
import MySettingPage from "../../pages/user/MySettingPage";

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
      { path: "book", element: <MyBookPage /> },
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
