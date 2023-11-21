import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CategoryBtn from "./CategoryButton";
import List from "../Main/List";
import { seekingProductsState } from "../ProductState/SeekingProductsState";
import { useRecoilValue } from "recoil";

export default function CategoryList() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const productData = useRecoilValue(seekingProductsState);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // 수평 가운데 정렬
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
                type="seeking"
            />
        </>
    );
}
