import React from "react";
import * as S from "./style";
import Search from "src/assets/img/common/Search_icon.svg";
import Left from "src/assets/img/common/Left.svg";
import Right from "src/assets/img/common/Right.svg";
import useCommunity from "src/hooks/community/useCommunity";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const { ...community } = useCommunity();

  return (
    <S.CommunityPage>
      <S.Community>
        <S.Top>
          <S.Text>커뮤니티</S.Text>
          <S.SearchWrap>
            <S.SearchImgWrap>
              <S.SearchImg src={Search}></S.SearchImg>
            </S.SearchImgWrap>
            <S.Search
              value={community.searchValue}
              placeholder="검색어를 입력해주세요."
              onChange={community.handleChangeValue}
              onKeyDown={community.handleKeydown}></S.Search>
          </S.SearchWrap>
        </S.Top>
        <S.Bottom>
          <S.TitlePost>
            <S.Nickname>닉네임</S.Nickname>
            <S.Title>제목</S.Title>
            <S.Date>작성 날짜</S.Date>
          </S.TitlePost>
          {(community.filterData.length
            ? community.filterData
            : community.data
          ).map((item) => (
            <S.Post
              key={item.boardId}
              onClick={() => navigate(`/community/${item.boardId}`)}>
              <S.Nickname>{item.nickname}</S.Nickname>
              <S.Title>{item.title}</S.Title>
              <S.Date>{`${item.createdAt[0]}. ${item.createdAt[1]}. ${item.createdAt[2]}`}</S.Date>
            </S.Post>
          ))}
          <S.PageWrap>
            <S.CurrentNum>{community.page}</S.CurrentNum>
            <S.SumNum>/</S.SumNum>
            <S.SumNum style={{ marginRight: "10px" }}>10</S.SumNum>
            <S.Btn
              src={Left}
              style={{ marginRight: "10px" }}
              onClick={community.DecreasePage}></S.Btn>
            <S.Btn src={Right} onClick={community.IncreasePage}></S.Btn>
          </S.PageWrap>
        </S.Bottom>
      </S.Community>
    </S.CommunityPage>
  );
};

export default Community;
