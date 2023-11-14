/* eslint-disable*/

import React from "react";
import BookmarkItem from "./BookmarkItem";
import UserData from "../Data/UsersData.json";
import { List } from "@mui/material";

/*
 * json 구조
 * UsersData.json
 * id, password, name, "bookMarkData"
 * bookMarkData는 lendingProductId 리스트이다.
 * id는 유일한 값
 * bookMarkData의 여러 lendingProductId 객체 배열을 가져온다.
 */

const Bookmark = ({ userId }) => {
  if (userId == null) {
    // test code
    userId = "user2@2";
  }
  const [{ bookMarkData }] = UserData.filter((user) => user.id === userId);

  return (
    <>
      <h1>북마크 정보</h1>
      <List sx={{ bgColor: "blue" }}>
        {bookMarkData.map(({ lendingProductId }, idx) => (
          <BookmarkItem ProductId={lendingProductId} key={`${userId}-${idx}`} />
        ))}
      </List>
    </>
  );
};

export default Bookmark;
