import React, { useState, useEffect } from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import userData from "../Data/UsersData.json";
import CATEGORY from "../Category/CATEGORYS";

export default function List({ selectedCategory, productData, type }) {
    const userId = localStorage.getItem("userId");
    const bookmarks =
        userData.find((el) => el.id === userId)?.bookMarkData || [];
    const [filteredProducts, setFilteredProducts] = useState([]);

    const showAllProducts = () => {
        setFilteredProducts(productData);
    };

    const showCategoryProducts = (categoryId) => {
        const updatedProducts = productData.filter((product) => {
            return product.productCartegory === categoryId.toString();
        });
        setFilteredProducts(updatedProducts);
    };

    useEffect(() => {
        if (selectedCategory !== null && CATEGORY[selectedCategory]) {
            const categoryId = CATEGORY[selectedCategory].id;
            if (categoryId === 0) {
                // 전체 카테고리 버튼이 눌린 경우
                showAllProducts();
            } else {
                showCategoryProducts(categoryId);
            }
        } else {
            //선택된 카테고리 버튼이 없을 경우 전체 물품 보여줌
            showAllProducts();
        }
    }, [selectedCategory]);

    return (
        <Grid container spacing={5} sx={{ padding: "50px" }}>
            {filteredProducts.map((product) => (
                <Grid item xs={2.4} key={product.productId}>
                    <Product {...product} type={type} />
                </Grid>
            ))}
        </Grid>
    );
}
