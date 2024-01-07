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
