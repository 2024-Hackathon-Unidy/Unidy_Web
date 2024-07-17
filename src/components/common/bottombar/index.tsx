import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Bottombar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrap>
        <S.Text onClick={() => navigate("/company")}>회사 소개</S.Text>
        <S.Text onClick={() => navigate("/rest")}>재휴 안내</S.Text>
        <S.Text onClick={() => navigate("/advertise")}>광고 안내</S.Text>
        <S.Text onClick={() => navigate("/utilization")}>이용 약관</S.Text>
        <S.Text onClick={() => navigate("/personal-info")}>개인 정보 약관</S.Text>
        <S.Text onClick={() => navigate("/protect-policy")}>청소년 보호 정책</S.Text>
      </S.Wrap>
    </S.Container>
  );
};

export default Bottombar;
