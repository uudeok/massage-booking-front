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
import RootLayoutPage from "../../pages/user/RootLayoutPage";
import MyOrderPage from "../../pages/user/MyOrderPage";
import MyOrderDetailPage from "../../pages/user/MyOrderDetail";
import UserWithdrawalPage from "../../pages/user/UserWithdrawalPage";
import NaverLoginPage from "../../pages/auth/NaverLoginPage";
import KakaoLoginPage from "../../pages/auth/KakaoLoginPage";
import MyInformationPage from "../../pages/user/MyInfomationPage";

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
      { path: "information", element: <MyInformationPage /> },
      { path: "withdraw", element: <UserWithdrawalPage /> },
    ],
  },
];

const authRouteObjects: RouteObject[] = [
  { path: "login", element: <LoginPage /> },
  { path: "naverCallback", element: <NaverLoginPage /> },
  { path: "kakaoCallback", element: <KakaoLoginPage /> },
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
