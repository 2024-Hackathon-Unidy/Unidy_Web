import React from "react";
import * as S from "./style";
import WriteImg from "src/assets/img/write/Write_Img.svg";

const Write = () => {
    return (
        <S.WritePage>
            <S.WriteWrap>
                <S.WriteTitleWrap>
                    <S.WriteTitleImg src={WriteImg}></S.WriteTitleImg>
                    <S.WriteTitle>작성하기</S.WriteTitle>
                </S.WriteTitleWrap>
                <S.DangerText>*표시는 필수 입력 사항입니다.</S.DangerText>
                <S.InputWrap>
                    <S.Input>
                        <S.InputTitleWrap>
                            <S.InputTitle>닉네임<span style={{color: "red"}}>*</span></S.InputTitle>
                        </S.InputTitleWrap>
                        <S.NameInput placeholder="닉네임을 입력해주세요."></S.NameInput>
                    </S.Input>
                    <S.Input>
                        <S.InputTitleWrap>
                            <S.InputTitle>제목<span style={{color: "red"}}>*</span></S.InputTitle>
                        </S.InputTitleWrap>
                        <S.TitleInput placeholder="제목을 입력해주세요."></S.TitleInput>
                    </S.Input>
                    <S.Input>
                        <S.InputTitleWrap>
                            <S.InputTitle>내용<span style={{color: "red"}}>*</span></S.InputTitle>
                        </S.InputTitleWrap>
                        <S.ContentInput placeholder="공지할 내용을 입력해주세요."></S.ContentInput>
                    </S.Input>
                    <S.Input>
                        <S.InputTitleWrap>
                            <S.InputTitle>파일 첨부</S.InputTitle>
                        </S.InputTitleWrap>
                        <S.FileInput placeholder="이곳을 클릭해 파일을업로드 하세요."></S.FileInput>
                        <S.FileUpload>파일 업로드</S.FileUpload>
                    </S.Input>
                </S.InputWrap>
                <S.SubmitBtnWrap>
                    <S.SubmitBtn>글 업로드 하기</S.SubmitBtn>
                </S.SubmitBtnWrap>
            </S.WriteWrap>
        </S.WritePage>
    )
}

export default Write;