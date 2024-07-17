import React from "react";
import * as S from "./style";
import Logo from "src/assets/img/common/UNIDY_Logo.svg";
import Search from "src/assets/img/topbar/Search_icon.svg";

const Topbar = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap>
            <S.Logo src={Logo}></S.Logo>
            <S.LogoText>UNIDY</S.LogoText>
        </S.LogoWrap>
        <S.SearchWrap>
            <S.ImgWrap>
                <S.Img src={Search}></S.Img>
            </S.ImgWrap>
            <S.Search placeholder="검색어를 입력해주세요"></S.Search>
        </S.SearchWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Topbar;
