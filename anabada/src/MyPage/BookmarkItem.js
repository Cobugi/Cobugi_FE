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

const BookmarkItem = ({ ProductId }) => {
  const [products] = LendingProductsData.filter(
    ({ ProductId }) => ProductId === ProductId
  );

  console.log(products);

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
          src={products.productImage}
          width={100}
          height={100}
        />
        <LocationCityIcon />
        <ListItemText
          primary={products.place}
          secondary={
            <>
              <Typography sx={{ display: "inline" }}>
                {products.productTitle}
              </Typography>
              <Typography sx={{ color: "blue" }}>
                {products.productPrice}원/일
              </Typography>
              <Typography>
                <CircleIcon sx={{ color: "#d3d3d3" }} />
                {products.registeredUserName}
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
