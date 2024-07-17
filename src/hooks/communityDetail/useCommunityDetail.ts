import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unidyAxios } from "src/libs/axios/customAxios";

interface Props {
  boardId: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: number[];
}

const useCommunityDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Props>();

  useEffect(() => {
    const Read = async () => {
      try {
        await unidyAxios.get(`board/all/${id}`).then((res) => {
          setData(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    Read();
  }, []);
  return {
    data,
  };
};

export default useCommunityDetail;
