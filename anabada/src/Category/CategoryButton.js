import React from "react";
import ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import CATEGORY from './CATEGORYS'
import Grid from "@mui/material/";

const MyStyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    borderColor: "#B3B3B3",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    color: "#333333",
    transition: "background-color 0.3s",
    '&:hover': {
      backgroundColor: "#EEEEEE",
      borderColor: "#B3B3B3",
    },
  }));

export default function CategoryBtn() {
    const textStyle = {
        marginLeft:"7px",
        fontSize:"13px"
    };

    return (
        <>
        
      {CATEGORY.map((item) => (
        
        <div key={item.id}>
          <MyStyledButton>
            {item.icon || <div className="empty-icon" />} {/* 아이콘이 없으면 빈 아이콘을 렌더링 */}
          </MyStyledButton>
          <p style={textStyle}>{item.text}</p>
        </div>
      ))}
    </>
  );
}
