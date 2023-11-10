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
import Divider from "@mui/material/Divider";
import Modal from "./Modal";
import ProductModal from "./Modal";

export default function Product(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const bookMark = () => {
        if (props.bookMarkIcon === true) {
            props.delete(props.id);
        } else {
            props.add(props.id);
        }
    };

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
                    image={props.image}
                    alt="제품 이미지"
                />
                <CardContent>
                    <Typography
                        color="#707070"
                        sx={{ fontSize: "11px", marginBottom: "5px" }}
                    >
                        {props.writer}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{ fontSize: "11px", fontWeight: "bold" }}
                        component="div"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "13px", marginBottom: "8px" }}
                        color="#4470E1"
                    >
                        {props.cost} 원/일
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
                                {props.rating}
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <div style={{ position: "absolute", top: "3%", right: "3%" }}>
                {props.bookMarkIcon === true ? (
                    <BsFillBookmarkFill
                        size="40"
                        color="#FFDB5A"
                        onClick={() => bookMark}
                    />
                ) : (
                    <BsFillBookmarkFill
                        size="40"
                        color="#D9D9D9"
                        style={{
                            opacity: 0.8,
                        }}
                        onClick={() => bookMark}
                    />
                )}
            </div>
            <ProductModal {...props} open={open} handleClose={handleClose} />
        </Card>
    );
}
