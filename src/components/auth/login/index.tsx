import React from "react";
import * as S from "./style";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";
import LoginImg from "src/assets/img/login/Login_Img.svg";
import IdImg from "src/assets/img/signup/ID_Img.svg";
import PwImg from "src/assets/img/signup/Pw_Img.svg";
import HideImg from "src/assets/img/signup/Hide_Img.svg";
import ShowImg from "src/assets/img/signup/Show_Img.svg";

const Login = () => {
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
                placeholder="아이디를 입력하세요"></S.Input>
              <S.InputImg src={IdImg}></S.InputImg>
            </S.InputBox>
            <S.InputBox>
              <S.Text htmlFor="pw">비밀번호</S.Text>
              <S.Input
                id="pw"
                type={"password"}
                placeholder="비밀번호를 입력하세요"></S.Input>
              <S.InputImg src={PwImg}></S.InputImg>
              <S.PwImg
                src={HideImg}></S.PwImg>
            </S.InputBox>
          </S.InputWrap>
          <S.SubmitBtn>로그인</S.SubmitBtn>
        </S.Right>
      </S.Container>
    </S.SignUpPage>
  );
};

export default Login;
