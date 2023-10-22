import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchBox from "./search";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Edit } from "iconsax-react";

export default function PrimarySearchAppBar() {
    const [value, setValue] = React.useState(0); // value 상태 변수를 정의
    const handleChange = (event, newValue) => {
        setValue(newValue); // handleChange 함수를 정의
    };

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
            <Box
                position="static"
                color=""
                sx={{ borderBottom: "1px solid #DBDBDB" }}
            >
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
                            src="/anabada_logo.jpg"
                            width="90px"
                            height="50px"
                        ></img>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <SearchBox />
                    <Box sx={{ flexGrow: 1 }} />
                    <div style={{marginRight:'20px'}}>
                    <Button variant="contained" style={buttonStyle}>
                        <span style={{ marginRight: 12 + "px" }}>물품등록</span>
                        <Edit color="#4470E1" variant="Linear" size={30} />
                    </Button>
                    </div>
                    <Button
                        variant="text"
                        sx={{ fontWeight: "bold", color: "#333333" }}
                    >
                        로그인
                    </Button>
                    <Button
                        variant="text"
                        sx={{ fontWeight: "bold", color: "#333333" }}
                    >
                        회원가입
                    </Button>
                </Toolbar>
                <div style={{ borderBottom: "1px solid #DBDBDB" }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab sx={{ fontSize: "18px" }} label="빌리기" />
                        <Tab sx={{ fontSize: "18px" }} label="빌려주기" />
                        <Tab sx={{ fontSize: "18px" }} label="물품 지도" />
                    </Tabs>
                </div>
            </Box>
        </Box>
    );
}
