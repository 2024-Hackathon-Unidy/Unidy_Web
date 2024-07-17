import React, { useState, useEffect } from "react";
import token from "src/libs/token/token";

const useTopbar = () => {
  const handleClickLogout = () => {
    window.location.href = "/login";
    token.clearToken();
  };

  return {
    handleClickLogout,
  };
};

export default useTopbar;
