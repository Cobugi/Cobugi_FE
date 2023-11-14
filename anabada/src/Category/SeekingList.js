import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CategoryBtn from "./CategoryButton";
import List from "../Main/List";
import productData from "../Data/SeekingProductsData.json";

export default function CategoryList() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div
            style={{
                padding: "30px 0 0 0",
                marginLeft: "30px",
                marginRight: "30px",
            }}
        >
            <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                sx={{ marginTop: "10px", marginBottom: "10px" }}
            >
                <CategoryBtn
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </ButtonGroup>
            <hr style={{ border: "1px solid #B3B3B3", opacity: "0.7" }} />
            <List
                selectedCategory={selectedCategory}
                productData={productData}
                type="seeking"
            />
        </div>
    );
}
