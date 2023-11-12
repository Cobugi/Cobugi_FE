import Product from "./Product";
import productData from "../Data/LendingProductsData.json";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import userData from "../Data/UsersData.json";

export default function List() {
    const [bookmarks, setbookmarks] = useState(
        userData.filter((el) => el.id === localStorage.getItem("userId"))
            .bookMarkData
    );

    return (
        <Grid container spacing={5} sx={{ padding: "50px" }}>
            {productData.map((prodcut) => (
                <Grid item xs={2.4}>
                    <Product
                        {...prodcut}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
