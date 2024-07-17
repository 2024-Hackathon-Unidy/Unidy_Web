import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "src/page/auth/login/page";
import SignUpPage from "src/page/auth/signup/page";
import MainPage from "src/page/main/page";
import CommunityPage from "src/page/community/page";
import WritePage from "src/page/write/page";
import PreparePage from "src/page/prepare/page";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/cultural-festival" element={<PreparePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/language-education" element={<PreparePage />} />
      <Route path="/policy-support" element={<PreparePage />} />

      <Route path="/company" element={<PreparePage />} />
      <Route path="/rest" element={<PreparePage />} />
      <Route path="/advertise" element={<PreparePage />} />
      <Route path="/utilization" element={<PreparePage />} />
      <Route path="/personal-info" element={<PreparePage />} />
      <Route path="/protect-policy" element={<PreparePage />} />
    </Routes>
  );
};

export default Router;
