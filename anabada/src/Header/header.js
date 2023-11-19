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
import { useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

export default function PrimarySearchAppBar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const auth = getAuth();

    const buttonStyle = {
        width: "140px", // 가로 크기
        height: "40px",
        borderRadius: "10px",
        backgroundColor: "#ECF1FF",
        color: "#4470E1",
        fontWeight: "bold",
    };

    useEffect(() => {
        

        // Listen for changes in the user's login status
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        const auth = getAuth();

        // Sign out the user
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("User signed out");
                // Clear currentUser in local storage
                localStorage.setItem("currentUser", null);
                // You can redirect or perform additional actions after successful logout.
            })
            .catch((error) => {
                // An error happened.
                console.error("Error during logout", error);
            });
    };

    
    const handleChatButtonClick = () => {
        // 현재 로그인한 사용자 가져오기
        const currentUser = auth.currentUser;
      
        if (currentUser) {
          // 사용자가 로그인되어 있으면 대화하기 기능 수행
          
        } else {
          // 사용자가 로그인되어 있지 않으면 다이얼로그 표시 및 로그인 창으로 이동
          alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
          // 로그인 페이지로 이동하는 코드를 추가
          navigate("/signin");
        }
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
                            margin: "25px 20px 0 0",
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
                    {/* <SearchBox /> */}
                    <Box sx={{ flexGrow: 1 }} />
                    <div style={{ marginRight: "20px" }}>
                        <Button variant="contained" style={buttonStyle} onClick={handleChatButtonClick}>
                            <span style={{ marginRight: 12 + "px" }}>
                                물품등록
                            </span>
                            <Edit color="#4470E1" variant="Linear" size={30} />
                        </Button>
                    </div>

                    {!user ? (
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
                                    handleLogout();
                                    navigate("/");
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