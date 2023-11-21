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
import { DateRange } from "react-date-range";
import CloseIcon from "@mui/icons-material/Close";
import { Calendar } from "iconsax-react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import * as locales from "react-date-range/dist/locale";
import Popover from "@mui/material/Popover";

export default function List({ selectedCategory, productData, type }) {
    const userId = localStorage.getItem("userId");
    const itemsPerPage = 20;

    const bookmarks =
        userData.find((el) => el.id === userId)?.bookMarkData || [];
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [dateRange, setDateRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: "selection",
        },
    ]);

    const [anchorEl, setAnchorEl] = useState(null);

    const applyFilters = () => {
        let result = productData;

        // 1. 물품 검색어에 대한 필터링
        if (searchText) {
            result = result.filter((product) =>
                product.productTitle.includes(searchText)
            );
        }

        // 2. 날짜 범위가 선택되었을 경우에만 적용
        if (dateRange[0].startDate && dateRange[0].endDate) {
            const startDate = dateRange[0].startDate;
            const endDate = dateRange[0].endDate;

            result = result.filter((product) => {
                const productStartDate = new Date(product.startDate);
                const productEndDate = new Date(product.lastDate);

                return (
                    (productStartDate >= startDate &&
                        productStartDate <= endDate) ||
                    (productEndDate >= startDate &&
                        productEndDate <= endDate) ||
                    (productStartDate <= startDate && productEndDate >= endDate)
                );
            });
        }

        // 3. 선택된 카테고리가 있다면 해당 카테고리에 대한 필터링
        if (selectedCategory !== null && CATEGORY[selectedCategory]) {
            const categoryId = CATEGORY[selectedCategory].id;
            if (categoryId !== 0) {
                result = result.filter(
                    (product) =>
                        product.productCartegory === categoryId.toString()
                );
            }
        }

        // 결과를 상태에 반영
        setFilteredProducts(result);
    };

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
        // 이 부분에서 검색어에 따라 필터링을 수행합니다.
        applyFilters();
    }, [searchText, productData]);

    useEffect(() => {
        // dateRange가 변경될 때마다 날짜에 따라 필터링을 수행합니다.
        applyFilters();
    }, [dateRange]);

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
        // bookmarks 등이 변경될 때마다 필터링을 수행합니다.
        applyFilters();
    }, [bookmarks]);

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDateChange = (item) => {
        setDateRange([item.selection]);
    };

    const handleCancelSelection = () => {
        setDateRange([
            {
                startDate: null,
                endDate: null,
                key: "selection",
            },
        ]);
    };

    const handleSearch = (text) => {
        setSearchText(text);
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    p: "2px 4px",
                    // width: "27%",
                    borderRadius: "33px",
                    marginTop: "30px",
                    marginLeft: "50px",
                }}
            >
                <Button
                    size="small"
                    endIcon={<Calendar size="24" color="#4470E1" />}
                    onClick={handleClick}
                >
                    <div
                        style={{
                            color: "black",
                            fontSize: "13px",
                            marginRight: "5px",
                            marginLeft: "20px",
                        }}
                    >
                        대여기간:{" "}
                        {dateRange[0].startDate
                            ? dateRange[0].startDate.toLocaleDateString()
                            : ""}{" "}
                        -{" "}
                        {dateRange[0].endDate
                            ? dateRange[0].endDate.toLocaleDateString()
                            : ""}
                    </div>
                </Button>
                <Popover
                    id="simple-popover"
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <DateRange
                        style={{ width: "400px" }}
                        editableDateInputs={true}
                        onChange={handleDateChange}
                        moveRangeOnFirstSelection={false}
                        locale={locales["ko"]}
                        ranges={dateRange}
                    />
                </Popover>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <InputBase
                    sx={{ fontSize: "13px" }}
                    placeholder="물품을 검색해보세요."
                    inputProps={{ "aria-label": "search google maps" }}
                    size="small"
                />
                <IconButton
                    type="button"
                    sx={{ p: "10px", color: "#4470E1" }}
                    aria-label="search"
                    onClick={() => handleSearch(searchText)}
                >
                    <SearchNormal1 />
                </IconButton>
                <Button onClick={handleCancelSelection}>
                    <CloseIcon />
                </Button>
            </Paper>

            <Grid container spacing={5} sx={{ padding: "50px" }}>
                {currentDisplayedProducts.map((product) => (
                    <Grid item xs={2.4} key={product.productId}>
                        <Product {...product} type={type} />
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
