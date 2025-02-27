import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrap = styled.div`
    width: 90%;
    min-height: 90px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrap = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;
`

export const Logo = styled.img`
    width: 45px;
    height: 45px;

    margin-right: 20px;
`

export const LogoText = styled.span`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 24px;
`

export const AuthWrap = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 15px;
    margin-right: 30px;
`

export const Link = styled.span`
    color: #5C5555;
    font-family: Pretendard-Medium;
    font-size: 16px;

    cursor: pointer;
`

export const Line = styled.span`
    color: #5C5555;
    font-family: Pretendard-Medium;
    font-size: 20px;
`

export const Img = styled.img`
    width: 18px;
    height: 18px;
`

export const Text = styled.span`
    color: #5C5555;
    font-family: Pretendard-Medium;
    font-size: 16px;
`
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