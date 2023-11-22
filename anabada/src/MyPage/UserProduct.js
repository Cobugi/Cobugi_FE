import { React, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { lendingProductsState } from "../ProductState/LendigProductsState";
import { seekingProductsState } from "../ProductState/SeekingProductsState";

const UserProduct = ({ curEmail, curName }) => {
  const lend = useRecoilValue(lendingProductsState);
  const seek = useRecoilValue(seekingProductsState);

  //내가 등록한 물건
  //lend와 seek에서 registeredUserId가 나의 id인 경우
  const myRegister_lend = lend.filter(
    (product) => product.registeredUserId === curEmail
  );
  const myRegister_seek = seek.filter(
    (product) => product.registeredUserId === curEmail
  );
  const myRegister = [...myRegister_lend, ...myRegister_seek];
  //내가 빌린 물건은 2가지 경우의 수가 있다.
  // 1. lend 각 원소에 reservedUsersInfo(배열) 각 원소에 "reservedUser"배열에 내 id가 있을 경우..
  const mySeek_lend = lend.filter((product) =>
    product.reservedUsersInfo.some(
      (reservedUser) => reservedUser.reservedUser === curEmail
    )
  );
  //2. seek 각 원소에 registeredUserId가 내 id이고 state가 1인 경우
  const mySeek_seek = seek.filter(
    (product) => product.registeredUserId === curEmail
  );
  //3. 내가 빌린 물건 최종
  const mySeek = [...mySeek_lend, ...mySeek_seek];

  //내가 빌려준 물건은 2가지 경우의 수가 있다.
  //1. lend 각 원소에 registeredUserId가 내 id이고 state가 1인 경우
  const myLend_lend = lend.filter(
    (product) => product.registeredUserId === curEmail && product.state === "1"
  );
  //2. seek 각 원소에 lendingUserId가 나인 경우
  const myLend_seek = seek.filter(
    (product) => product.lendingUserId === curEmail
  );
  //3. 내가 빌려준 물건 최종
  const myLend = [...myLend_lend, ...myLend_seek];

  const getSeekItem = () => mySeek;

  const getLendItem = () => myLend;

  const getRegister = () => myRegister;

  const debugPrint = () => {
    console.log(myRegister);
    console.log(mySeek);
    console.log(myLend);
  };
  return { getSeekItem, getLendItem, getRegister };
};

export default UserProduct;
