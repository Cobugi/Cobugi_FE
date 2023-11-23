/* eslint-disable*/

import React, { useState } from "react";

import { Box, Paper, Typography, Button, ButtonGroup } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRecoilValue } from "recoil";
import { lendingProductsState } from "../ProductState/LendigProductsState";
import { seekingProductsState } from "../ProductState/SeekingProductsState";
import { usersState } from "../ProductState/UsersState";
import ProductCard from "./ProductCard";
import MyProductCard from "./MyProductCard";

//등록물건, 빌려준물건, 빌린물건 이렇게 3가지로 구분해야한다.

const ItemManage = ({ curName, myRegister, mySeek, myLend }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  // const lend = useRecoilValue(lendingProductsState);
  console.log(mySeek);
  return (
    <>
      <Paper
        sx={{
          height: "600px",
          width: "600px",
          backgroundColor: "white",
          borderRadius: 5,
          border: 0,
          padding: "10px",
          elevation: 3,
        }}
      >
        <Box sx={{ margin: 1 }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => setShowCalendar(false)}>물품관리</Button>
            <Button onClick={() => setShowCalendar(true)}>캘린더</Button>
          </ButtonGroup>
        </Box>

        {!showCalendar && (
          // 물품 관리 UI
          <>
            <Box sx={{ border: 1, margin: 1, width: "97%", height: "30%" }}>
              <Typography marginLeft={1} marginTop={1}>
                등록 물건
              </Typography>
              <Box sx={{ border: 1, margin: 1, height: "70%" }}>
                {myRegister.length > 4
                  ? myRegister
                      .slice(0, 4)
                      .map((product) => (
                        <ProductCard
                          product={product}
                          key={`${curName}-${product.productId}`}
                        />
                      ))
                  : myRegister.map((product) => (
                      <ProductCard
                        product={product}
                        userFlag={false}
                        key={`${curName}-${product.productId}`}
                      />
                    ))}
              </Box>
            </Box>

            <Box sx={{ border: 1, margin: 1, width: "97%", height: "30%" }}>
              <Typography marginLeft={1} marginTop={1}>
                빌린 물건
              </Typography>
              <Box sx={{ border: 1, margin: 1, height: "70%" }}>
                {mySeek.length > 4
                  ? mySeek
                      .slice(0, 4)
                      .map((product) => (
                        <ProductCard
                          product={product}
                          userFlag={true}
                          key={`${curName}-${product.productId}`}
                        />
                      ))
                  : mySeek.map((product) => (
                      <ProductCard
                        product={product}
                        userFlag={true}
                        key={`${curName}-${product.productId}`}
                      />
                    ))}
              </Box>
            </Box>

            <Box sx={{ border: 1, margin: 1, width: "97%", height: "30%" }}>
              <Typography marginLeft={1} marginTop={1}>
                빌려준 물건
              </Typography>
              <Box sx={{ border: 1, margin: 1, height: "70%" }}>
                {myLend.map((product) => (
                  <ProductCard
                    product={product}
                    key={`${curName}-${product.productId}`}
                  />
                ))}
              </Box>
            </Box>
          </>
        )}

        {showCalendar && (
          // 캘린더 UI
          <Box>캘린더</Box>
        )}
      </Paper>
    </>
  );
};

export default ItemManage;
