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

//110%일때 화면으로 봐야함
const MyPageIndex = () => {
  // userid를 props가 아닌 렌더링 시점에서 가져오도록 변경
  const [userId, changeUserId] = useState(null);

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
            <UserInfo />
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
