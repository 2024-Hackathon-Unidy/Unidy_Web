import React from "react";
import * as S from "./style";

const Bottombar = () => {
    return (
        <S.Container>
            <S.Wrap>
                <S.Text>회사 소개</S.Text>
                <S.Text>재휴 안내</S.Text>
                <S.Text>광고 안내</S.Text>
                <S.Text>이용 약관</S.Text>
                <S.Text>개인 정보 약관</S.Text>
                <S.Text>청소년 보호 정책</S.Text>
            </S.Wrap>
        </S.Container>
    )
}

export default Bottombar;