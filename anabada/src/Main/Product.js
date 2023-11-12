import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Bookmark, Building4 } from "iconsax-react";
import { FaStar } from "react-icons/fa";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import Grid from "@mui/material/Grid";
import ProductModal from "./Modal";

export default function Product(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [bookMarkIcon, setBookmarkIcon] = React.useState(false);

    return (
        <Card
            sx={{
                position: "relative",
                borderRadius: "10px",
                boxShadow: "10px 10px 20px #EEEEEE",
            }}
        >
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.productImage}
                    alt="제품 이미지"
                />
                <CardContent>
                    <Typography
                        color="#707070"
                        sx={{ fontSize: "11px", marginBottom: "5px" }}
                    >
                        {props.registereUserName}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{ fontSize: "11px", fontWeight: "bold" }}
                        component="div"
                    >
                        {props.productTitle}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "13px", marginBottom: "8px" }}
                        color="#4470E1"
                    >
                        {props.productPrice} 원/일
                    </Typography>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography
                                sx={{
                                    color: "#7E7E7E",
                                    fontSize: "13px",
                                    align: "left",
                                }}
                            >
                                <Building4 size="13" color="#7E7E7E" />
                                {props.place}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <div style={{ color: "#7E7E7E", align: "right" }}>
                                <FaStar color="red" />
                                4.0
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <div style={{ position: "absolute", top: "3%", right: "3%" }}>
                {bookMarkIcon === true ? (
                    <BsFillBookmarkFill
                        size="40"
                        color="#FFDB5A"
                        onClick={() => setBookmarkIcon(!bookMarkIcon)}
                    />
                ) : (
                    <BsFillBookmarkFill
                        size="40"
                        color="#D9D9D9"
                        style={{
                            opacity: 0.8,
                        }}
                        onClick={() => setBookmarkIcon(!bookMarkIcon)}
                    />
                )}
            </div>
            <ProductModal {...props} open={open} handleClose={handleClose} />
        </Card>
    );
}
