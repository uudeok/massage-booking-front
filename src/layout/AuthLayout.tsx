import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getUserName } from "../util/auth";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const name = getUserName();
    if (!name) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
