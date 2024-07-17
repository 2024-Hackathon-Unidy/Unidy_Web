import React from "react";
import * as S from "./style";
import NotDevelopImg from "src/assets/img/common/NotDevelop_Img.svg";

const Prepare = () => {
  return (
    <S.PreparePage>
      <S.Prepare>
        <S.Img src={NotDevelopImg}></S.Img>
        <S.Text>아직 개발중인 페이지입니다.</S.Text>
      </S.Prepare>
    </S.PreparePage>
  );
};

export default Prepare;
