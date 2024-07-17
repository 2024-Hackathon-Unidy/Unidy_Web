import React from "react";
import * as S from "./style";
import Img from "src/assets/img/community/Ex_Img.svg";
import useCommunityDetail from "src/hooks/communityDetail/useCommunityDetail";

const CommunityDetail = () => {
  const { ...communityDetail } = useCommunityDetail();

  return (
    <S.CommunityDetailPage>
      <S.CommunityDetail>
        <S.CultureTitle>문화 갤러리</S.CultureTitle>
        <S.ReadWrap>
          <S.Title>{communityDetail.data?.title}</S.Title>
          <S.InfoWrap>
            <S.Writer>글쓴이: {communityDetail.data?.nickname}</S.Writer>
            <S.Text>|</S.Text>
            <S.Date>{`${communityDetail.data?.createdAt[0]}. ${communityDetail.data?.createdAt[1]}. ${communityDetail.data?.createdAt[2]}`}</S.Date>
          </S.InfoWrap>
          <S.Line></S.Line>
          <S.ImgWrap>
            <S.Img src={Img}></S.Img>
          </S.ImgWrap>
          <S.ContentWrap>
            <S.Content>{communityDetail.data?.content}</S.Content>
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
