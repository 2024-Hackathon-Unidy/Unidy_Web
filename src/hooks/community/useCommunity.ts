import React, { useState, useEffect } from "react";
import { unidyAxios } from "src/libs/axios/customAxios";

interface Props {
  boardId: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: number[];
}

const useCommunity = () => {
  const [data, setData] = useState<Props[]>([]);
  const [page, setPage] = useState(1);

  const IncreasePage = () => {
    if (page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  const DecreasePage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const CommunityListRead = async () => {
      try {
        await unidyAxios
          .get("/board/all"
          //   , {
          //   params: {
          //     page: page,
          //     size: 10,
          //   },
          // }
        )
          .then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    CommunityListRead();
  }, [page]);

  return {
    data,
    page,
    IncreasePage,
    DecreasePage,
  };
};

export default useCommunity;
