import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "src/page/signup/page";

const Router = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default Router;
