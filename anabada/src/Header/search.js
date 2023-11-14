import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { SearchNormal1, Calendar } from "iconsax-react";
import Popover from "@mui/material/Popover";

export default function SearchBox() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 450,
                borderRadius: "33px",
                marginLeft: "170px",
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
                        fontSize: 13 + "px",
                        marginRight: 5 + "px",
                        marginLeft: 20 + "px",
                    }}
                >
                    대여기간
                </div>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            ></Popover>
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
