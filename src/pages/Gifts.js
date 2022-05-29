import React, { useEffect, useState } from "react";
import GiftsList from "../components/Gifts/GiftsList";
import { useQuery, queryClient } from "react-query";
import axios from "axios";
import Pagination from "../components/Gifts/Pagination";
import Loader from "../components/helpers/Loader";

const Gifts = () => {
  let [page, setPage] = useState(0);

  let fetchGifts = async ({ queryKey }) => {
    let page = queryKey[1];
    console.log(page);
    return await axios.get(
      `https://giftingangels.herokuapp.com/products?page=${page}`
    );
  };
  let { isLoading, error, data } = useQuery(["gifts", page], fetchGifts);

  if (isLoading) {
    return <Loader />;
  }
  console.log("Hi", data);
  let increase = () => {
    if (page >= data.data.totalPages) {
      return setPage(0);
    }
    setPage((prev) => prev + 1);
  };
  let decrease = () => {
    if (page < 0) {
      return setPage(data.data.totalPages);
    }
    setPage((prev) => prev - 1);
  };
  console.log("Hi", data);

  return (
    <>
      <GiftsList gifts={data.data?.products} />
      <Pagination
        increase={increase}
        decrease={decrease}
        setPage={setPage}
        totalPages={data.data.totalPages}
        page={page}
      />
    </>
  );
};

export default Gifts;
