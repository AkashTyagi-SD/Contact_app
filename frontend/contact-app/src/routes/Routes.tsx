import { Routes, Route } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/SignUp";
import ForgotPassword from "../components/forgot-password/ForgotPassword";

export default function RoutesHandling() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
