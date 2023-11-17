/* eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";
import "../Header/header";
import UserInfo from "../MyPage/UserInfo";
import ItemManage from "./ItemManage";
import Bookmark from "./Bookmark";
import { Import } from "iconsax-react";
import PrimarySearchAppBar from "../Header/header";
import { Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";


//110%일때 화면으로 봐야함
const MyPageIndex = ({ id }) => {
  


  return (   
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      position="absolute"
    >
      <Grid container>
        <PrimarySearchAppBar/>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{backgroundColor:grey[200], height:"100vh"}}
      > 
        <Grid item>
          <UserInfo/>
        </Grid>
        <Grid item>
          <ItemManage/>
        </Grid>
        <Grid item>
          <Bookmark/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyPageIndex;
