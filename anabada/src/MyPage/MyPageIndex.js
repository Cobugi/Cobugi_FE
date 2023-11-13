/* eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";
import "../Header/header"
import { Import } from "iconsax-react";
import PrimarySearchAppBar from "../Header/header";
import UserInfo from "./UserInfo";
import ItemManage from "./ItemManage";
import Bookmark from "./Bookmark";

const MyPageIndex = ({ id }) => {

    return (
        <>
            <PrimarySearchAppBar />
            <UserInfo />
            <ItemManage />
            <Bookmark userId={ id } />
        </>
    )
}

export default MyPageIndex