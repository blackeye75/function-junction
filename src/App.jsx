import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Headder from "./component/Headder/Headder";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="min-h-screen flex flex-wrap " >
      <div className="w-full block ">
        <Headder />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
