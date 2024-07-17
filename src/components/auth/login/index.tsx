import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";
import LoginImg from "src/assets/img/login/Login_Img.svg";
import IdImg from "src/assets/img/common/ID_Img.svg";
import PwImg from "src/assets/img/common/Pw_Img.svg";
import HideImg from "src/assets/img/common/Hide_Img.svg";
import ShowImg from "src/assets/img/common/Show_Img.svg";
import useLogin from "src/hooks/auth/login/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { ...login } = useLogin();

  return (
    <S.SignUpPage>
      <S.Container>
        <S.Left>
          <S.LogoWrap>
            <S.Logo src={Logo}></S.Logo>
            <S.LogoText>UNIDY</S.LogoText>
          </S.LogoWrap>
          <S.Img src={LoginImg}></S.Img>
        </S.Left>
        <S.Right>
          <S.SignUpText>로그인</S.SignUpText>
          <S.InputWrap>
            <S.InputBox>
              <S.Text htmlFor="id">아이디</S.Text>
              <S.Input
                id="id"
                placeholder="아이디를 입력하세요"
                onChange={login.handleChangeValue}></S.Input>
              <S.InputImg src={IdImg}></S.InputImg>
            </S.InputBox>
            <S.InputBox>
              <S.Text htmlFor="pw">비밀번호</S.Text>
              <S.Input
                id="pw"
                type={login.isShow ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                onChange={login.handleChangeValue}></S.Input>
              <S.InputImg src={PwImg}></S.InputImg>
              <S.PwImg
                src={login.isShow ? ShowImg : HideImg}
                onClick={() => login.setIsShow((prev) => !prev)}></S.PwImg>
            </S.InputBox>
          </S.InputWrap>
          <S.SubmitWrap>
            <S.AccountWrap>
              <S.AccountText>계정이 없으신가요?</S.AccountText>
              <S.Account onClick={() => navigate("/sign-up")}>
                회원가입
              </S.Account>
            </S.AccountWrap>
            <S.SubmitBtn onClick={login.handleClickSubmit}>로그인</S.SubmitBtn>
          </S.SubmitWrap>
        </S.Right>
      </S.Container>
    </S.SignUpPage>
  );
};

export default Login;
