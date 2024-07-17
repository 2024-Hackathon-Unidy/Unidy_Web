import React from "react";
import * as S from "./style";
import Img from "src/assets/img/community/Ex_Img.svg";

const CommunityDetail = () => {
  return (
    <S.CommunityDetailPage>
      <S.CommunityDetail>
        <S.CultureTitle>문화 갤러리</S.CultureTitle>
        <S.ReadWrap>
          <S.Title>보령 머드 축제 갔다</S.Title>
          <S.InfoWrap>
            <S.Writer>글쓴이: 띠혀니</S.Writer>
            <S.Text>|</S.Text>
            <S.Date>2024.05.30</S.Date>
          </S.InfoWrap>
          <S.Line></S.Line>
          <S.ImgWrap>
            <S.Img src={Img}></S.Img>
          </S.ImgWrap>
          <S.ContentWrap>
            <S.Content>
              한국을 대표하는 여름 축제인 ‘보령머드축제’가 시작됐다. 이번 축제는
              가수 싸이의 여름 콘서트인 ‘싸이흠뻑쇼’ 등 다채로운 행사로
              꾸며진다. 충남 보령시는 지난 21일 개막한 제26회 머드축제가 8월
              6일까지 대천해수욕장 일원에서 열린다고 23일 밝혔다. ‘머드’는 원래
              ‘물기가 있어 질척한 흙’이라는 뜻이다. 보령 대천해수욕장 일대의
              머드는 피부 노화방지, 피부노폐물 제거 등 피부 미용에 뛰어난 효능을
              가지고 있다는 연구 결과가 나와 있다. 국내 유명 화장품 업체에서 이
              머드를 이용한 화장품도 생산하고 있다. ‘머드축제’는 이 머드를
              활용해 다양한 즐길 거리를 제공하도록 꾸민 행사다.
            </S.Content>
          </S.ContentWrap>
          <S.CommentWrap>
            <S.TopWrap>
              전체 댓글 <span style={{ color: "#D31800" }}>530</span>개
            </S.TopWrap>
            {Array.from({ length: 6 }).map((_, idx: number) => (
              <S.Comment key={idx}>
                <S.CommentWriter>서현동</S.CommentWriter>
                <S.CommentContent>보령 머드축제 최고</S.CommentContent>
                <S.CommentDate>2024.05.31</S.CommentDate>
              </S.Comment>
            ))}
            <S.pageNum>
              <S.page style={{ color: "#D31800" }}>1</S.page>
              <S.page>2</S.page>
              <S.page>3</S.page>
            </S.pageNum>
          </S.CommentWrap>
          <S.RegisterWrap>
            <S.RegisterTitle>댓글 달기</S.RegisterTitle>
            <S.Register placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."></S.Register>
            <S.RegisterBtnWrap>
                <S.RegisterBtn>등록</S.RegisterBtn>
            </S.RegisterBtnWrap>
          </S.RegisterWrap>
        </S.ReadWrap>
      </S.CommunityDetail>
    </S.CommunityDetailPage>
  );
};

export default CommunityDetail;
