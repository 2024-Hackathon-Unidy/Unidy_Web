import styled from "styled-components";

export const SignUpPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #00bc41;
`;

export const Container = styled.div`
  width: 75%;
  height: 80%;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Left = styled.div`
  width: 48%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;

  margin-right: 25px;
`;

export const LogoText = styled.span`
  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 40px;
`;

export const Img = styled.img`
  width: 363px;
  height: 318px;
`;

export const Right = styled.div`
  width: 52%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const SignUpText = styled.span`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 32px;
`;

export const InputWrap = styled.div`
  width: 70%;
  height: 35%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 93px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`;

export const Text = styled.label`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 20px;

  margin-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;

  color: #000;
  font-family: Pretendard-SemiBold;
  font-size: 16px;

  border: 1px solid #b5b5b5;
  border-radius: 10px;

  padding-left: 45px;

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const InputImg = styled.img`
  width: 16px;
  height: 20px;

  position: absolute;
  top: 55px;
  left: 15px;
`;

export const PwImg = styled.img`
  width: 27px;
  height: 15px;

  position: absolute;
  top: 58px;
  right: 10px;

  cursor: pointer;
`;

export const SubmitWrap = styled.div`
  width: 70%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AccountWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: row;
`;

export const AccountText = styled.span`
  color: #b6b6b6;
  font-family: Pretendard-Bold;
  font-size: 14px;
`;

export const Account = styled.span`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 14px;

  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: #008c25;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 55px;

  color: #fff;
  font-family: Pretendard-Bold;
  font-size: 24px;

  border-radius: 5px;
  background-color: #008c25;

  cursor: pointer;
  margin-top: 15px;
`;
