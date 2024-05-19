import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Header from "./Components/Header/header.tsx";
import MainScroll from "./Components/Main/mainScroll.tsx";
import Login from "./Pages/Login/Login.tsx";
import Signup from "./Pages/SignUp/SignUp.tsx";
import SecondPage from "./Pages/SignUp/SecondPage.tsx";
import LandingPage from "./Pages/LandingPage/Landing.tsx";
import UserProvider from "./Context/UserContext.tsx";
import PageCountProvider from "./Context/PageContext.tsx";
import ProtectedRoutes from "./Routes/ProtectedRoutes.tsx";
import AuthProvider from "./Context/Authprovider.tsx";
import Addpost from "./Pages/AddPost/Addpost.tsx";
import AddPoss from "./Pages/addpos/addPosst.tsx";
import Seniors from "./Pages/Seniors/Seniors.tsx";
import Success from "./Pages/SignUp/Success.tsx";
import AllUsers from "./Pages/Admin/AllUsers/AllUsers.tsx";
import AllPost from "./Pages/AllPosts/AllPosts.tsx";
import Events from "./Pages/Events/Events.tsx";

const Rout = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoutes>
        <Login />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/main",
    element: (
      <ProtectedRoutes>
        <MainScroll />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/second",
    element: (
      <ProtectedRoutes>
        <SecondPage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/landing",
    element: (
      <ProtectedRoutes>
        <LandingPage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/head",
    element: (
      <ProtectedRoutes>
        <Header />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/addpost",
    element: (
      <ProtectedRoutes>
        <Addpost />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoutes>
        <Signup />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/seniors",
    element: (
      <ProtectedRoutes>
        <Seniors />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/success",
    element: (
      <ProtectedRoutes>
        <Success />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/events",
    element: (
      <ProtectedRoutes>
        <Events />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/Allposts",
    element: (
      <ProtectedRoutes>
        <AllPost />
      </ProtectedRoutes>
    ),
  },

  {
    path: "/admin/allusers",
    element: (
      <ProtectedRoutes>
        <AllUsers />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/addpos",
    element: (
      <ProtectedRoutes>
        <AddPoss />
      </ProtectedRoutes>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <PageCountProvider>
        <AuthProvider isSignedIn={true}>
          <RouterProvider router={Rout} />
        </AuthProvider>
      </PageCountProvider>
    </UserProvider>
  </React.StrictMode>
);
