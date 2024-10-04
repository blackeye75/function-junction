import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-block sm:px-3 py-2 duration-200 font-['Varela_Round'] text-xl font-extralight rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;