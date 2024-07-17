import React, { useState, useRef, MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";
import { unidyAxios } from "src/libs/axios/customAxios";
import { showToast } from "src/libs/toast/swal";

const useWrite = () => {
  const navigate = useNavigate();
  const fileRef: MutableRefObject<any> = useRef(null);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<string>("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFileClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    const imageURL = URL.createObjectURL(file);
    setFile(imageURL);
    formData.append("file", file);
  };

  const handleClickSubmit = async () => {
    try {
      if (!name) return showToast("error", "닉네임을 입력해주세요");
      if (!title) return showToast("error", "제목을 입력해주세요");
      if (!content) return showToast("error", "내용을 입력해주세요");

      await unidyAxios
        .post("board/create", {
          nickname: name,
          title: title,
          content: content,
          file: file,
        })
        .then(() => {
          showToast("success", "글 업로드 성공");
          navigate("/community");
        });
    } catch (error) {
      showToast("error", "글 업로드 실패");
      console.log(error);
    }
  };

  return {
    name,
    title,
    content,
    file,
    fileRef,
    handleChangeName,
    handleChangeTitle,
    handleChangeContent,
    handleFileClick,
    handleFileChange,
    handleClickSubmit,
  };
};

export default useWrite;
