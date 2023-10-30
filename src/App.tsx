import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
}

export default App;

/// html, body 의 height 를 100% 으로 주고,
/// 그 안에 높이를 정확히 지정해주어야 콘텐츠 길이의 상관없이 footer 가 맨 밑에 고정됨
