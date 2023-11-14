import React, { useState, useEffect } from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import userData from "../Data/UsersData.json";
import CATEGORY from "../Category/CATEGORYS";
import Pagination from "@mui/material/Pagination";

export default function List({ selectedCategory, productData, type }) {
    const userId = localStorage.getItem("userId");
    const itemsPerPage = 20;
    const bookmarks =
        userData.find((el) => el.id === userId)?.bookMarkData || [];
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDisplayedProducts = filteredProducts.slice(
        startIndex,
        endIndex
    );
    const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <Grid container spacing={5} sx={{ padding: "50px" }}>
                {filteredProducts.map((product) => (
                    <Grid item xs={2.4} key={product.productId}>
                        <Product {...product} type={type} />
                    </Grid>
                ))}
            </Grid>
            <Pagination //바뀐곳
                count={totalPageCount}
                size="small"
                page={currentPage}
                onChange={handlePageChange}
                sx={{
                    margin: "20px auto",
                    display: "flex",
                    justifyContent: "center",
                }}
            />
        </>
    );
}
