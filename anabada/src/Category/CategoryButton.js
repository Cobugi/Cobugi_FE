import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import CATEGORY from "./CATEGORYS";
import { useState } from "react";
import Grid from "@mui/material/Grid";

const MyStyledButton = styled(Button)(({ categoryActive }) => ({
  backgroundColor: categoryActive ? "#EEEEEE" : "white",
  borderColor: "#B3B3B3",
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  color: "#333333",
  transition: "background-color 0.3s",
  '&:hover': {
    backgroundColor: categoryActive ? "#EEEEEE" : "#EEEEEE",
    borderColor: "#B3B3B3",
  },
  pointerEvents: categoryActive ? "none" : "auto", // 변경된 부분
}));


export default function CategoryBtn({ selectedCategory, setSelectedCategory }) {
  const textStyle = {
    fontSize: "14px",
    whiteSpace: "nowrap",
  };

  const divstyle = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "14px",
    whiteSpace: "nowrap",
  };
  
  return (
    <Grid container spacing={11}>
      {CATEGORY.map((item, index) => (
        <Grid item xs={1.1} key={item.id}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
              <MyStyledButton
                categoryActive={index === selectedCategory}
                onClick={() =>  setSelectedCategory(index)}
              >
                {item.icon || <div className="empty-icon" />}
              </MyStyledButton>
            </div>
            <div style={divstyle}>{item.text}</div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}