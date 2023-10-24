import Product from "./Product";
import productData from "./product-data.json";
import Grid from "@mui/material/Grid";

export default function List() {
    return (
        <Grid container spacing={5} sx={{ padding: "30px" }}>
            {productData.map((prodcut) => (
                <Grid item xs={2.4}>
                    <Product {...prodcut} />
                </Grid>
            ))}
        </Grid>
    );
}
