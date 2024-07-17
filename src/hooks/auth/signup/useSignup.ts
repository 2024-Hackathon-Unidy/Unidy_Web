import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { showToast } from "src/libs/toast/swal";

const useSignup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [lan, setLan] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleChangeLan = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLan(e.target.value);
  };

  const handleClickSubmit = async () => {
    try {
      if (!id) return showToast("error", "아이디를 입력해주세요");
      if (!pw) return showToast("error", "비밀번호를 입력해주세요");
      if (!lan) return showToast("error", "언어를 선택해주세요");

      await axios.post(`${CONFIG.UNIDY_Server}/#`, { // API 추가 필요
        id: id,
        pw: pw,
        lan: lan,
      }).then(() => {
        showToast("success", "회원가입 성공");
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
      showToast("error", "회원가입 실패");
    }
  };

  return {
    id,
    pw,
    lan,
    isShow,
    setIsShow,
    handleChangeId,
    handleChangePw,
    handleChangeLan,
    handleClickSubmit,
  };
};

export default useSignup;
