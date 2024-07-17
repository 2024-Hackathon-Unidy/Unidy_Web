import styled from "styled-components";

export const PreparePage = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Prepare = styled.div`
    width: 70%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Img = styled.img`
    width: auto;
    height: auto;

    margin-bottom: 80px;
`

export const Title = styled.span`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 28px;

    margin-bottom: 10px;
`

export const Content = styled.span`
    color: #a9a9a9;
    font-family: Pretendard-Medium;
    font-size: 16px;

    cursor: pointer;

    &:hover {
        color: #d9d9d9;
    }
`