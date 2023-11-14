/* eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";
import "../Header/header";
import UserInfo from "../MyPage/UserInfo";
import ItemManage from "./ItemManage";
import Bookmark from "./Bookmark";
import { Import } from "iconsax-react";
import PrimarySearchAppBar from "../Header/header";

const MyPageIndex = ({ id }) => {
  return (
    <>
      <PrimarySearchAppBar />
      <UserInfo />
      <ItemManage />
      <Bookmark userId={id} />
    </>
  );
};

export default MyPageIndex;
