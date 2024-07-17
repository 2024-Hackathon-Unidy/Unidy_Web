import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useTopbar from "src/hooks/common/topbar/useTopbar";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";
import User from "src/assets/img/common/User_Img.svg";
import token from "src/libs/token/token";
import { REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";

const Topbar = () => {
  const navigate = useNavigate();
  const { ...topbar } = useTopbar();

  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap onClick={() => navigate("/")}>
          <S.Logo src={Logo}></S.Logo>
          <S.LogoText>UNIDY</S.LogoText>
        </S.LogoWrap>
        <S.AuthWrap>
          {!token.getToken(REFRESH_TOKEN_KEY) ? (
            <>
              <S.Link onClick={() => navigate("/login")}>로그인</S.Link>
              <S.Line>|</S.Line>
              <S.Link onClick={() => navigate("/sign-up")}>회원가입</S.Link>
            </>
          ) : (
            <>
              <S.Img src={User}></S.Img>
              <S.Text>띠혀니</S.Text>
              <S.Line>|</S.Line>
              <S.Link onClick={topbar.handleClickLogout}>로그아웃</S.Link>
            </>
          )}
        </S.AuthWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Topbar;
