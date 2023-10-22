import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { SearchNormal1, Calendar } from "iconsax-react";

export default function SearchBox() {
    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 450,
                borderRadius: "33px",
            }}
        >
            <Button
                size="small"
                endIcon={<Calendar size="24" color="#4470E1" />}
            >
                <div
                    style={{
                        color: "black",
                        fontSize: 13 + "px",
                        marginRight: 5 + "px",
                        marginLeft: 20 + "px",
                    }}
                >
                    대여기간
                </div>
            </Button>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
                sx={{ ml: 1, flex: 1, fontSize: 13 + "px" }}
                placeholder="물품을 검색해보세요."
                inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
                type="button"
                sx={{ p: "10px", color: "#4470E1" }}
                aria-label="search"
            >
                <SearchNormal1 />
            </IconButton>
        </Paper>
    );
}
