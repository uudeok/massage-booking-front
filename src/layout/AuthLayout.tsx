import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getCookie } from "../util/auth";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie("userId")) {
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
