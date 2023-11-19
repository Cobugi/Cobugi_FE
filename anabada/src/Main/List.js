import React, { useState, useEffect } from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import userData from "../Data/UsersData.json";
import CATEGORY from "../Category/CATEGORYS";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { SearchNormal1 } from "iconsax-react";

export default function List({ selectedCategory, productData, type }) {
  const userId = localStorage.getItem("userId");
  const itemsPerPage = 20;

  const bookmarks =
    userData.find((el) => el.id === userId)?.bookMarkData || [];
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

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
      // 선택된 카테고리 버튼이 없을 경우 전체 물품 보여줌
      showAllProducts();
    }
  }, [selectedCategory]);

  useEffect(() => {
    // 이 부분에서 검색어에 따라 필터링을 수행합니다.
    const searchFilteredProducts = productData.filter((product) =>
      product.productTitle.includes(searchText)
    );

    setFilteredProducts(searchFilteredProducts);
  }, [searchText, productData]);

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
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 450,
          borderRadius: "33px",
          marginLeft: "170px",
          marginBottom: "20px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: 13 + "px" }}
          placeholder="물품을 검색해보세요."
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "#4470E1" }}
          aria-label="search"
        >
          <SearchNormal1 />
        </IconButton>
      </Paper>

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
        sx={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </>
  );
}
