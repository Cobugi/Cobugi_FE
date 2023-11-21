/* eslint-disable*/

import React, { useEffect } from "react";
import LendingProductsData from "../Data/LendingProductsData.json";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CircleIcon from "@mui/icons-material/Circle";
import { useRecoilState, useRecoilValue } from "recoil";
import { lendingProductsState } from "../ProductState/LendigProductsState";

const BookmarkItem = ({ productId }) => {
  const products = useRecoilValue(lendingProductsState);

  const [filteredProducts] = products.filter(
    ({ ProductId }) => ProductId === productId
  );

  console.log(filteredProducts);

  return (
    <>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar
            alt="물건"
            src="anabada/public/Camera.JPG"
            sx={{ width: "100%", height: 56 }}
          />
        </ListItemAvatar> */}
        <img
          alt="물건사진"
          src={filteredProducts.productImage}
          width={100}
          height={100}
        />
        <LocationCityIcon />
        <ListItemText
          primary={filteredProducts.place}
          secondary={
            <>
              <Typography sx={{ display: "inline" }}>
                {filteredProducts.productTitle}
              </Typography>
              <Typography sx={{ color: "blue" }}>
                {filteredProducts.productPrice}원/일
              </Typography>
              <Typography>
                <CircleIcon sx={{ color: "#d3d3d3" }} />
                {filteredProducts.registeredUserName}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider varient="inset" component="li" />
    </>
  );
};

export default BookmarkItem;
