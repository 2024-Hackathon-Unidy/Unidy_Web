import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap onClick={() => navigate("/")}>
            <S.Logo src={Logo}></S.Logo>
            <S.LogoText>UNIDY</S.LogoText>
        </S.LogoWrap>
        <S.AuthWrap>
          <S.SignIn onClick={() => navigate("/login")}>로그인</S.SignIn>
          <S.Line>|</S.Line>
          <S.SignUp onClick={() => navigate("/sign-up")}>회원가입</S.SignUp>
        </S.AuthWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Topbar;
