import styled from "styled-components";

export const CommunityDetailPage = styled.div`
  width: 100%;
  min-height: 2275px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommunityDetail = styled.div`
  width: 80%;
  height: 95%;

  display: flex;
  flex-direction: column;
`;

export const CultureTitle = styled.p`
  width: 100%;
  height: 50px;

  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 32px;

  border-bottom: 5px solid #8c5f3b;

  margin-bottom: 50px;
`;

export const ReadWrap = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 24px;

  margin-bottom: 20px;
`;

export const InfoWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;

  gap: 20px;
  margin-bottom: 20px;
`;

export const Writer = styled.span`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 14px;
`;

export const Text = styled.span`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 14px;
`;

export const Date = styled.span`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 14px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;

  background-color: #d9d9d9;

  margin-bottom: 30px;
`;

export const ImgWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ContentWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;

export const Content = styled.span`
  width: 100%;

  color: #000;

  border: 1px solid #000;
  background-color: #f5f5f5;

  padding: 50px 15px;
`;

export const CommentWrap = styled.div`
  width: 100%;
  height: auto;
`;

export const TopWrap = styled.div`
  width: 100%;
  height: 40px;

  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 20px;

  border-bottom: 5px solid #8c5f3b;
`;

export const Comment = styled.div`
  width: 100%;
  height: 95px;

  display: flex;
  flex-direction: column;

  border: 1px solid #c9c8c8;
  margin-top: 10px;
  padding: 15px 40px;
  position: relative;
`;

export const CommentWriter = styled.span`
    color: #000;
    font-size: 16px;

    margin-bottom: 10px;
`

export const CommentContent = styled.span`
    color: #000;
    font-size: 14px;

    margin-bottom: 10px;
`

export const CommentDate = styled.span`
    position: absolute;
    font-size: 12px;
    right: 15px;
`

export const pageNum = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 20px;
    margin-top: 50px;
`

export const page = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold;
    font-size: 16px;

    cursor: pointer;
`

export const RegisterWrap = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
`

export const RegisterTitle = styled.p`
  width: 100%;
  height: 45px;

  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 22px;

  border-bottom: 5px solid #8c5f3b;

  margin-top: 80px;
`;

export const Register = styled.textarea`
    width: 100%;
    height: 150px;

    border: 1px solid #909090;
    outline: none;
    resize: none;

    margin-top: 10px;
    padding: 30px;
`

export const RegisterBtnWrap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-top: 20px;
`

export const RegisterBtn = styled.button`
    width: 150px;
    height: 40px;

    color: #fff;
    font-family: Pretendard-Bold;
    font-size: 16px;

    border-radius: 5px;
    background-color: #00BC41;

    cursor: pointer;
`