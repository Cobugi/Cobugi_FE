// CategoryList.js
import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CategoryBtn from "./CategoryButton";
import List from "../Main/List";
import { useRecoilValue } from "recoil";
import { lendingProductsState } from "../ProductState/LendigProductsState";

export default function CategoryList() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchText, setSearchText] = useState(""); // 추가
    const productData = useRecoilValue(lendingProductsState);

    console.log(productData);
    const handleSearch = (text) => {
        setSearchText(text);
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                    sx={{ marginTop: "5px", marginBottom: "20px" }}
                >
                    <CategoryBtn
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </ButtonGroup>
            </div>
            <hr style={{ border: "1px solid #B3B3B3", opacity: "0.7" }} />
            <List
                selectedCategory={selectedCategory}
                productData={productData}
                type="lending"
                searchText={searchText} // 추가
                onSearch={handleSearch} // 추가
            />
        </>
    );
}
