import React from "react";
import * as S from "./style";
import useSignup from "src/hooks/signup/useSignup";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";
import SignUpImg from "src/assets/img/signup/SignUp_Img.svg";
import IdImg from "src/assets/img/signup/ID_Img.svg";
import PwImg from "src/assets/img/signup/Pw_Img.svg";
import HideImg from "src/assets/img/signup/Hide_Img.svg";
import ShowImg from "src/assets/img/signup/Show_Img.svg";
import LanguageImg from "src/assets/img/signup/Language_Img.svg";
import { LanguageData } from "src/constants/data/language";

const SignUp = () => {
  const { ...signup } = useSignup();

  return (
    <S.SignUpPage>
      <S.Container>
        <S.Left>
          <S.LogoWrap>
            <S.Logo src={Logo}></S.Logo>
            <S.LogoText>UNIDY</S.LogoText>
          </S.LogoWrap>
          <S.Img src={SignUpImg}></S.Img>
        </S.Left>
        <S.Right>
          <S.SignUpText>회원가입</S.SignUpText>
          <S.InputWrap>
            <S.InputBox>
              <S.Text htmlFor="id">아이디</S.Text>
              <S.Input
                id="id"
                placeholder="아이디를 입력하세요"
                onChange={signup.handleChangeId}></S.Input>
              <S.InputImg src={IdImg}></S.InputImg>
            </S.InputBox>
            <S.InputBox>
              <S.Text htmlFor="pw">비밀번호</S.Text>
              <S.Input
                id="pw"
                type={signup.isShow ? "text" : "password"}
                placeholder="비밀번호를 입력하세요"
                onChange={signup.handleChangePw}></S.Input>
              <S.InputImg src={PwImg}></S.InputImg>
              <S.PwImg
                src={signup.isShow ? ShowImg : HideImg}
                onClick={() => signup.setIsShow((prev) => !prev)}></S.PwImg>
            </S.InputBox>
            <S.InputBox>
              <S.Text>언어</S.Text>
              <S.Select value={signup.lan} onChange={signup.handleChangeLan}>
                <S.Option value="" selected disabled>
                  언어를 선택하세요
                </S.Option>
                {LanguageData.map((item) => (
                  <S.Option key={item.id} value={item.code}>
                    {item.language}
                  </S.Option>
                ))}
              </S.Select>
              <S.OptionImg src={LanguageImg}></S.OptionImg>
            </S.InputBox>
          </S.InputWrap>
          <S.SubmitBtn onClick={signup.handleClickSubmit}>회원가입</S.SubmitBtn>
        </S.Right>
      </S.Container>
    </S.SignUpPage>
  );
};

export default SignUp;
