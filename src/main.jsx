import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import Home from "./pages/Home.jsx";
import SignupMain from "./pages/SignupMain.jsx";
import SigninMain from "./pages/SigninMain.jsx";
import ForgotPassword from "./component/signin/ForgotPassword.jsx";
import ResetPassword from "./component/signin/ResetPassword.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignupMain />,
      },
      {
        path: "/signin",
        element: <SigninMain />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      } ,{
        path:"/about",
        element:<Aboutpage/>
      }     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
