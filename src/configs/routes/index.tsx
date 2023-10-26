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
import MyPage from "../../pages/user/MyPage";
import MyRootLayoutPage from "../../pages/user/MyRootLayoutPage";

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

// element 마다 Layout 으로 감싸줘야 하는 불편함이 있었음
// notice 는 header 와 footer 레이아웃이 고정으로 필요한 컴포넌트이므로 NoticeRootLayout 페이지를
// 만들어서 부모에서 한번만 감싸주는 형태로 바꿈

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
    element: <MyRootLayoutPage />,
    children: [{ path: ":category", element: <MyPage /> }],
  },
];

const authRouteObjects: RouteObject[] = [
  { path: "login", element: <LoginPage /> },
  { path: "join", element: <JoinPage /> },
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
