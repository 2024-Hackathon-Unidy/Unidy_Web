import React from "react";
import * as S from "./style";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";
import useTopbar from "src/hooks/common/topbar/useTopbar";

const Topbar = () => {
    const { ...topbar } = useTopbar();

  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap onClick={topbar.GoToMain}>
            <S.Logo src={Logo}></S.Logo>
            <S.LogoText>UNIDY</S.LogoText>
        </S.LogoWrap>
        <S.AuthWrap>
          <S.SignIn>로그인</S.SignIn>
          <S.Line>|</S.Line>
          <S.SignUp>회원가입</S.SignUp>
        </S.AuthWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Topbar;
