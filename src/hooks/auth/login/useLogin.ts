import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";
import { showToast } from "src/libs/toast/swal";

interface Props {
  id: string;
  pw: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Props>({
    id: "",
    pw: "",
  });
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target as HTMLButtonElement;

    setData((prevData) => {
      return { ...prevData, [id]: e.target.value };
    });
  };

  const handleClickSubmit = async () => {
    try {
      if (!data.id) return showToast("error", "아이디를 입력해주세요");
      if (!data.pw) return showToast("error", "비밀번호를 입력해주세요");

      await axios
        .post(`${CONFIG.UNIDY_Server}/member/login`, {
          id: data.id,
          pw: data.pw,
        })
        .then((res) => {
          token.setToken(ACCESS_TOKEN_KEY, res.data.data[0].accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.data[0].refreshToken);
          showToast("success", "로그인 성공");
          navigate("/");
        });
    } catch (error) {
      console.log(error);
      showToast("error", "로그인 실패");
    }
  };

  return {
    data,
    isShow,
    setIsShow,
    handleChangeValue,
    handleClickSubmit,
  };
};

export default useLogin;
