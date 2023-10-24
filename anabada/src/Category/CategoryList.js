import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CategoryBtn from "./CategoryButton"

export default function CategoryList() {
    const buttonStyle = {
        backgroundColor: "white",
        borderColor: "#B3B3B3",
    };

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{marginTop:"10px"}}>
        <CategoryBtn/>
        </ButtonGroup>

    );
}
