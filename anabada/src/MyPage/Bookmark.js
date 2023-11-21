/* eslint-disable*/

import React from "react";
import BookmarkItem from "./BookmarkItem";
import UserData from "../Data/UsersData.json";
import { List, Typography } from "@mui/material";
import { Box, Paper } from "@mui/material";

/*
 * json 구조
 * UsersData.json
 * id, password, name, "bookMarkData"
 * bookMarkData는 lendingProductId 리스트이다.
 * id는 유일한 값
 * bookMarkData의 여러 lendingProductId 객체 배열을 가져온다.
 */

const Bookmark = ({ userId }) => {
  const [{ bookMarkData }] = UserData.filter((user) => user.id === userId);
  console.log(bookMarkData);
  return (
    <>
      <Paper
        sx={{
          height: "500px",
          width: "300px",
          backgroundColor: "white",
          borderRadius: 5,
          border: 0,
          padding: "10px",
          elevation: 3,
        }}
      >
        <Typography variant="h4" align="center" margin={2}>
          북마크
        </Typography>
        <List sx={{ bgColor: "blue" }}>
          {bookMarkData.map(({ ProductId }, idx) => (
            <BookmarkItem productId={ProductId} key={`${userId}-${idx}`} />
          ))}
        </List>
      </Paper>
    </>
  );
};

export default Bookmark;
