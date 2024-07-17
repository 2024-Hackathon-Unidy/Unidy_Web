import React, { useState, useEffect } from "react";
import { unidyAxios } from "src/libs/axios/customAxios";

const useCommunity = () => {
  const [data, setData] = useState();
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
          .get("board/all", {
            params: {
              page: page,
              size: 10,
            },
          })
          .then((res) => {
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
