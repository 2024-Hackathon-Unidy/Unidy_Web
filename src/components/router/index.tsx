import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "src/page/signup/page";
import PreparePage from "src/page/prepare/page";

const Router = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />

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
