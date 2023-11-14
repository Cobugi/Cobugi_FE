import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchBox from "./search";
import Button from "@mui/material/Button";
import { Edit } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { Message, ProfileCircle } from "iconsax-react";
import { IconButton } from "@mui/material";

export default function PrimarySearchAppBar() {
    const navigate = useNavigate();

    const buttonStyle = {
        width: "140px", // 가로 크기
        height: "40px",
        borderRadius: "10px",
        backgroundColor: "#ECF1FF",
        color: "#4470E1",
        fontWeight: "bold",
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box position="static" color="">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            margin: "20px",
                        }}
                    >
                        <img
                            alt="logo"
                            src="/anabada_logo.jpg"
                            width="90px"
                            height="50px"
                        ></img>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <SearchBox />
                    <Box sx={{ flexGrow: 1 }} />
                    <div style={{ marginRight: "20px" }}>
                        <Button variant="contained" style={buttonStyle}>
                            <span style={{ marginRight: 12 + "px" }}>
                                물품등록
                            </span>
                            <Edit color="#4470E1" variant="Linear" size={30} />
                        </Button>
                    </div>

                    {localStorage.getItem("currentUSer") !== null ? (
                        <>
                            <Button
                                variant="text"
                                sx={{ fontWeight: "bold", color: "#333333" }}
                                onClick={() => {
                                    navigate("/signin");
                                }}
                            >
                                로그인
                            </Button>
                            <Button
                                variant="text"
                                sx={{ fontWeight: "bold", color: "#333333" }}
                                onClick={() => {
                                    navigate("/signup");
                                }}
                            >
                                회원가입
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="text"
                                sx={{ fontWeight: "bold", color: "#333333" }}
                                onClick={() => {
                                    navigate("/signup");
                                }}
                            >
                                로그아웃
                            </Button>
                            <IconButton
                                onClick={() => {
                                    navigate("/chat");
                                }}
                            >
                                <Message
                                    size="40"
                                    color="#67788d"
                                    variant="Bold"
                                />
                            </IconButton>
                            <IconButton
                                onClick={() => {
                                    navigate("/mypage");
                                }}
                            >
                                <ProfileCircle
                                    size="40"
                                    color="#67788d"
                                    variant="Bulk"
                                />
                            </IconButton>
                        </>
                    )}
                </Toolbar>
            </Box>
        </Box>
    );
}