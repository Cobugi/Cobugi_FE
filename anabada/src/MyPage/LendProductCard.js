import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import { lendingProductsState } from "../ProductState/LendigProductsState";
import { seekingProductsState } from "../ProductState/SeekingProductsState";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CircleIcon from "@mui/icons-material/Circle";

const LendProductCard = ({ productId }) => {
  const lend = useRecoilValue(lendingProductsState);
  const [product] = lend.filter(({ ProductId }) => ProductId == productId);

  return (
    <Card sx={{ maxWidth: 141, maxHeight: 145 }}>
      <CardMedia
        sx={{ height: 55 }}
        image={product.productImage}
        title={product.productTitle}
      />
      <CardContent>
        <Typography sx={{ display: "inline" }}>
          <LocationCityIcon fontSize="small" />
          {product.place}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {product.productTitle}
        </Typography>
        <Typography variant="caption">
          <CircleIcon fontSize="small" sx={{ color: "#d3d3d3" }} />
          {product.registeredUserName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LendProductCard;
