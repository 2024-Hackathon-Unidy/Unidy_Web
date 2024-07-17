import styled from "styled-components";

export const CommunityPage = styled.div`
  width: 100%;
  min-height: 1080px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Community = styled.div`
  width: 80%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  width: 90%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.span`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 36px;
`;

export const SearchWrap = styled.div`
  width: 80%;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 15px;
  background-color: #f5f5f5;

  gap: 30px;
`;

export const SearchImgWrap = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const Search = styled.input`
  width: 90%;
  height: 100%;

  color: #000;
  font-family: Pretendard-Medium;
  font-size: 16px;

  background-color: transparent;

  &::placeholder {
    color: #000;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 78%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitlePost = styled.div`
  width: 90%;
  height: 55px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid #000;
`;

export const Post = styled.div`
  width: 90%;
  height: 55px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #c9c8c8;

  cursor: pointer;
`;

export const Nickname = styled.span`
  width: 15%;
  height: auto;

  color: #000;
  font-size: 18px;

  padding-left: 10px;
`;

export const Title = styled.span`
  width: 75%;
  height: auto;

  color: #000;
  font-size: 16px;
`;

export const Date = styled.span`
  width: auto;
  height: auto;

  color: #000;
  font-size: 16px;
`;

export const PageWrap = styled.div`
  width: 90%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-top: 10px;
`;

export const CurrentNum = styled.span`
  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
`;

export const SumNum = styled.span`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 16px;
`;

export const Btn = styled.img`
  width: 25px;
  height: 25px;

  cursor: pointer;
  margin-right: 20px;
`;
