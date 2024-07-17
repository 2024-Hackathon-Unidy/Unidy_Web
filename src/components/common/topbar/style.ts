import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90px;

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

export const SearchWrap = styled.div`
    width: 550px;
    height: 45px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 15px;
    background-color: #F5F5F5;
`

export const ImgWrap = styled.div`
    width: 15%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 22px;
    height: 22px;
`

export const Search = styled.input`
    width: 80%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium;
    font-size: 14px;

    border-radius: 0 15px 15px 0;
    background-color: #F5F5F5;

    &::placeholder {
        color: #000;
    }
`