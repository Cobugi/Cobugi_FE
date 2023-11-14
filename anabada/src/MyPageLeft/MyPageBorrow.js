import React from "react";
import Typography from "@mui/material/Typography";

export default function MyPageBorrow(props)  {
    const divstyle={
        marginLeft:"30px",
        marginTop:"20px",
        boxShadow:"2px 2px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        height: "75%",
        width: "75%",
      }
    return (
        <div style={divstyle} >
            <div ><img src={props.image}/></div>
            <Typography sx={{ fontSize: "11px"}}>
            {props.id}
             </Typography>
        </div>
    );
}