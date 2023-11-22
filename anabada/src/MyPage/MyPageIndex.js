/* eslint-disable*/

import React, { useEffect, useState } from "react";
import "../Header/header";
import UserInfo from "../MyPage/UserInfo";
import ItemManage from "./ItemManage";
import Bookmark from "./Bookmark";
import PrimarySearchAppBar from "../Header/header";
import { Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import NotFound from "./NotFound";
import { lendingProductsState } from "../ProductState/LendigProductsState";
import { seekingProductsState } from "../ProductState/SeekingProductsState";
import { useRecoilValue } from "recoil";

//110%일때 화면으로 봐야함
const MyPageIndex = () => {
  // userid를 props가 아닌 렌더링 시점에서 가져오도록 변경
  const [userId, changeUserId] = useState(null);

  const curEmail = localStorage.getItem("currentUser");
  const curName = localStorage.getItem("currentUser").split("@")[0];

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

  useEffect(() => {
    let currentUser = localStorage.getItem("currentUser");
    if (currentUser !== null) {
      changeUserId(currentUser);
    }
  });

  if (userId !== null && userId !== undefined) {
    return (
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
      >
        <Grid container>
          <PrimarySearchAppBar />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ backgroundColor: grey[200], height: "100vh" }}
        >
          <Grid item>
            <UserInfo
              curName={curName}
              myRegister={myRegister}
              mySeek={mySeek}
              myLend={myLend}
            />
          </Grid>
          <Grid item>
            <ItemManage userId={userId} />
          </Grid>
          <Grid item>
            <Bookmark userId={userId} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <PrimarySearchAppBar />
        <NotFound />
      </>
    );
  }
};

export default MyPageIndex;
