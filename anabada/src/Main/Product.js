import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Building4 } from "iconsax-react";
import { FaStar } from "react-icons/fa";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import Grid from "@mui/material/Grid";

export default function Product({ title, writer, cost, place, rating }) {
    const [bookMarkIcon, setbookMarkIcon] = React.useState(false);
    return (
        <Card sx={{ position: "relative" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="/Camera.JPG"
                    alt="제품 이미지"
                />
                <CardContent>
                    <Typography
                        color="#707070"
                        sx={{ fontSize: "11px", marginBottom: "5px" }}
                    >
                        {writer}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{ fontSize: "11px", fontWeight: "bold" }}
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "13px", marginBottom: "8px" }}
                        color="#4470E1"
                    >
                        {cost} 원/일
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Typography
                                sx={{ color: "#7E7E7E", fontSize: "13px" }}
                            >
                                <Building4 size="13" color="#7E7E7E" />
                                {place}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ color: "#7E7E7E" }}>
                                <FaStar color="red" />
                                {rating}
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
                        onClick={() => setbookMarkIcon(!bookMarkIcon)}
                    />
                ) : (
                    <BsFillBookmarkFill
                        size="40"
                        color="#D9D9D9"
                        style={{
                            opacity: 0.8,
                        }}
                        onClick={() => setbookMarkIcon(!bookMarkIcon)}
                    />
                )}
            </div>
        </Card>
    );
}
