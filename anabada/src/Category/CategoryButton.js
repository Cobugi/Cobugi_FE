import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import CATEGORY from "./CATEGORYS";

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
  pointerEvents: categoryActive ? "none" : "auto",
}));

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",  // Flexbox에서 강제로 한 줄에 담지 않음
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",  // 버튼 간격 조절
  
};

const divStyle = {
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function CategoryBtn({ selectedCategory, setSelectedCategory }) {
  return (
    <div style={containerStyle}>
      {CATEGORY.map((item, index) => (
        <div key={item.id} style={divStyle}>
          <div>
            <MyStyledButton
             sx={{
             marginBottom:"15px"
          }}
              categoryActive={index === selectedCategory}
              onClick={() => setSelectedCategory(index)}
            >
              {item.icon || <div className="empty-icon" />}
            </MyStyledButton>
          </div>
          <div style={{ fontSize: "14px", whiteSpace: "nowrap" }}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
