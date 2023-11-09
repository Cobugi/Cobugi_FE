/* eslint-disable*/

import React from "react";
import ReactDOM from "react-dom/client";
import "../Header/header"


const MyPageIndex = ({ id }) => {

    return (
        <>
            <PrimarySearchAppBar />
            <UserInfo />
            <ItemManage />
            <Bookmark />
        </>
    )
}

export default MyPageIndex