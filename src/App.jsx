import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Headder from "./component/Headder/Headder";
import LocomotiveScroll from "locomotive-scroll";
import { login, logout } from "./store/authSlice";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const locomotiveScroll = new LocomotiveScroll();
  const userData = useSelector((state) => state.auth.status);
  useEffect(() => {
    // if (userData) {
      authService
        .getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
            // console.log(userData);
          } else {
            dispatch(logout());
          }
        })
        .finally(() => {
          setLoading(false);
        });
    // }
  }, []);
  return !loading ? (
    <div className="min-h-screen  flex flex-wrap ">
      <div className="w-full block ">
        <Headder />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
