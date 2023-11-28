import { Outlet } from "react-router-dom";
import ModalContainer from "./components/common/UI/globalModal/ModalContainer";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ModalContainer />
      <Outlet />
    </div>
  );
}

export default App;

/// html, body 의 height 를 100% 으로 주고,
/// 그 안에 높이를 정확히 지정해주어야 콘텐츠 길이의 상관없이 footer 가 맨 밑에 고정됨

// ModalContainer 를 최상단에 위치해야 하는데, 처음에 index.tsx 의 RouterProvider 위에 놓았으나,,
// react-router-dom 밖에 위치하므로 라이브러리에 접근이 불가해짐
// 그래서 애플리케이션 내부의 최상단인 App 에 위치하게 함.
