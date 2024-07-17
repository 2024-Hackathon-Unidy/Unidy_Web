import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import NotDevelopImg from "src/assets/img/common/NotDevelop_Img.svg";

const Prepare = () => {
  const navigate = useNavigate();

  return (
    <S.PreparePage>
      <S.Prepare>
        <S.Img src={NotDevelopImg}></S.Img>
        <S.Title>아직 개발중인 페이지입니다</S.Title>
        <S.Content onClick={() => navigate(-1)}>이전 페이지로 돌아가기</S.Content>
      </S.Prepare>
    </S.PreparePage>
  );
};

export default Prepare;
