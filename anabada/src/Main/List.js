import React, { useState, useEffect } from "react";
import Product from "./Product";
import productData from "../Data/LendingProductsData.json";
import Grid from "@mui/material/Grid";
import userData from "../Data/UsersData.json";
import CATEGORY from "../Category/CATEGORYS";
import Pagination from "@mui/material/Pagination";

export default function List({ selectedCategory }) {
  const itemsPerPage = 20;

  const userId = localStorage.getItem("userId");
  const bookmarks = userData.find((el) => el.id === userId)?.bookMarkData || [];
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
        showAllProducts();
      } else {
        showCategoryProducts(categoryId);
      }
    } else {
      showAllProducts();
    }
  }, [selectedCategory]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDisplayedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Grid container spacing={5} sx={{ padding: "50px" }}>
        {currentDisplayedProducts.map((product) => (
          <Grid item xs={2.4} key={product.productId}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPageCount}
        size="small"
        page={currentPage}
        onChange={handlePageChange}
        sx={{ margin: "20px auto", display: "flex", justifyContent: "center" }}
      />
    </>
  );
}
