import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 90px;

    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Wrap = styled.div`
    width: 90%;
    height: 100%;

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
    width: 178px;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 30px;
`

export const SignIn = styled.span`
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

export const SignUp = styled.span`
    color: #5C5555;
    font-family: Pretendard-Medium;
    font-size: 16px;

    cursor: pointer;
`