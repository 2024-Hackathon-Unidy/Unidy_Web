import styled from "styled-components";

export const WritePage = styled.div`
    width: 100%;
    min-height: 806px;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const WriteWrap = styled.div`
    width: 100%;
    height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WriteTitleWrap = styled.div`
    width: 85%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 10px;
`

export const WriteTitleImg = styled.img`
    width: 30px;
    height: 35px;

    margin-right: 5px;
`

export const WriteTitle = styled.span`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 28px;
`

export const DangerText = styled.p`
    width: 85%;
    height: auto;

    color: #FF334B;
    font-family: Pretendard-Bold;
    font-size: 16px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-bottom: 5px;
`

export const InputWrap = styled.div`
    width: 100%;
    height: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #F5F5F5;

    margin-bottom: 30px;
`

export const Input = styled.div`
    width: 85%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InputTitleWrap = styled.div`
    width: 10%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InputTitle = styled.span`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 16px;
`

export const NameInput = styled.input`
    width: 40%;
    height: 60px;

    color: #000;
    font-family: Pretendard-Bold;
    font-size: 14px;

    border: 1px solid #B5B5B5;
    border-radius: 15px;

    padding-left: 20px;

    &::placeholder {
        color: #959595;
    }
`

export const TitleInput = styled.input`
    width: 80%;
    height: 60px;

    color: #000;
    font-family: Pretendard-Bold;
    font-size: 14px;

    border: 1px solid #B5B5B5;
    border-radius: 15px;

    padding-left: 20px;

    &::placeholder {
        color: #959595;
    }
`

export const ContentInput = styled.textarea`
    width: 80%;
    height: 192px;

    color: #000;
    font-family: Pretendard-Bold;
    font-size: 14px;

    border: 1px solid #B5B5B5;
    border-radius: 15px;

    padding: 20px;
    outline: none;
    resize: none;

    &::placeholder {
        color: #959595;
    }
`

export const FileInput = styled.input`
    width: 60%;
    height: 60px;

    color: #000;
    font-family: Pretendard-Bold;
    font-size: 14px;

    border: 1px solid #B5B5B5;
    border-radius: 15px;

    padding-left: 20px;
    margin-right: 20px;

    &::placeholder {
        color: #959595;
    }
`

export const FileUpload = styled.button`
    width: 230px;
    height: 60px;

    color: #000;
    font-family: Pretendard-Bold;
    font-size: 18px;

    border: 1px solid #000;
    border-radius: 20px;
    background-color: #fff;

    cursor: pointer;
`

export const SubmitBtnWrap = styled.div`
    width: 68%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const SubmitBtn = styled.div`
    width: 225px;
    height: 56px;

    color: #fff;
    font-family: Pretendard-Bold;
    font-size: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background-color: #00BC41;

    cursor: pointer;
`

