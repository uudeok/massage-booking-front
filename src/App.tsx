import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
}

export default App;
