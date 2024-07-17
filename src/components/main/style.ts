import styled from "styled-components";

export const MainPage = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const NavWrap = styled.div`
  width: 100%;
  min-height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: #3ad569;
`;

export const Nav = styled.div`
  width: 85%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 30px;
`;

export const NavRight = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavText = styled.span`
  color: #fff;
  font-family: Pretendard-Medium;
  font-size: 18px;

  cursor: pointer;
`;

export const NavLine = styled.span`
  color: #fff;
  font-family: Pretendard-Medium;
  font-size: 18px;
`;

export const ContentsWrap = styled.div`
  width: 100%;
  min-height: 850px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  width: 85%;
  height: 90%;

  display: flex;
  flex-direction: row;
`;

export const Section = styled.div`
  width: 72%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchWrap = styled.div`
  width: 95%;
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

export const FestivalWrap = styled.div`
  width: 100%;
  height: 158px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;
`;

export const Festival = styled.div`
  width: 33%;
  height: 100%;

  position: relative;
  cursor: pointer;
`;

export const FestivalImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const FestivalTitle = styled.span`
  color: #fff;
  font-family: Pretendard-SemiBold;
  font-size: 24px;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FestivalDate = styled.div`
  width: 68px;
  height: 24px;

  color: #fff;
  font-family: Pretendard-Medium;
  font-size: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: #e20000;

  position: absolute;
  top: 80%;
  left: 65%;
`;

export const PolicyWrap = styled.div`
  width: 100%;
  height: 464px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;

export const Policy = styled.div`
  width: 95%;
  height: 130px;

  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #000;
  margin-bottom: 30px;
`;

export const Left = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 84%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 5px;
`;

export const PolicyTitle = styled.span`
  color: #2e23b3;
  font-family: Pretendard-SemiBold;
  font-size: 20px;
`;

export const PolicyDate = styled.span`
  color: #434343;
  font-family: Pretendard-Medium;
  font-size: 15px;
`;

export const PolicyContent = styled.span`
  width: 85%;
  height: auto;

  color: #000;
  font-family: Pretendard-Medium;
  font-size: 15px;
`;

export const Right = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PolicyImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const PolicyLine = styled.div`
  width: 95%;
  height: 5px;

  background-color: #98632c;
`;

export const PolicyPageWrap = styled.div`
  width: 95%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  gap: 5px;
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
`;

export const aside = styled.div`
  width: 28%;
  height: 95%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WriteWrap = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Write = styled.div`
    width: 100%;
    height: 30%;

    border: 1px solid #000;
    padding: 20px 15px 10px 15px;
`

export const WriteTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold;
    font-size: 14px;

    margin-bottom: 20px;
`

export const WriteContentWrap = styled.div`
    width: 100%;
    height: auto;
`

export const WriteLine = styled.div`
    border: 1px dashed #000;
    margin-top: 10px;
`

export const WriteContent = styled.p`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 12px;

  margin-top: 20px;
`