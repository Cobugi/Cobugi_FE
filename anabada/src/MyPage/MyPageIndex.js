/* eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";
import "../Header/header"
import UserInfo from "../MyPage/UserInfo"
import { Import } from "iconsax-react";
import PrimarySearchAppBar from "../Header/header";

const MyPageIndex = ({ id }) => {

    return (
        <>
            <PrimarySearchAppBar />
            <UserInfo />
            <ItemManage />
            <BookMark />
        </>
    )
}

export default MyPageIndex