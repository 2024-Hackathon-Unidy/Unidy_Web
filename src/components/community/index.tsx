import React from "react";
import * as S from "./style";
import Search from "src/assets/img/common/Search_icon.svg";
import Left from "src/assets/img/common/Left.svg";
import Right from "src/assets/img/common/Right.svg";

const Community = () => {
  return (
    <S.CommunityPage>
      <S.Community>
        <S.Top>
          <S.Text>커뮤니티</S.Text>
          <S.SearchWrap>
            <S.SearchImgWrap>
              <S.SearchImg src={Search}></S.SearchImg>
            </S.SearchImgWrap>
            <S.Search placeholder="검색어를 입력해주세요."></S.Search>
          </S.SearchWrap>
        </S.Top>
        <S.Bottom>
          <S.TitlePost>
            <S.Nickname>닉네임</S.Nickname>
            <S.Title>제목</S.Title>
            <S.Date>작성 날짜</S.Date>
          </S.TitlePost>
          {Array.from({ length: 10 }).map((_, idx: number) => (
            <S.Post key={idx}>
              <S.Nickname>서현동</S.Nickname>
              <S.Title>보령 머드축제 갔다</S.Title>
              <S.Date>2024 . 7 . 17</S.Date>
            </S.Post>
          ))}
          <S.PageWrap>
            <S.CurrentNum>1</S.CurrentNum>
            <S.SumNum>/</S.SumNum>
            <S.SumNum style={{ marginRight: "10px" }}>10</S.SumNum>
            <S.Btn src={Left} style={{ marginRight: "10px" }}></S.Btn>
            <S.Btn src={Right}></S.Btn>
          </S.PageWrap>
        </S.Bottom>
      </S.Community>
    </S.CommunityPage>
  );
};

export default Community;
