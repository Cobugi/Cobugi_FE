import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CategoryList from "../Category/CategoryList";
import SeekingList from "../Category/SeekingList";

const MainTab = () => {
    const [value, setValue] = React.useState(0); // value 상태 변수를 정의
    const handleChange = (event, newValue) => {
        setValue(newValue); // handleChange 함수를 정의
    };
    const navigate = useNavigate();

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                sx={{ borderBottom: "1px solid #DBDBDB" }}
            >
                <Tab sx={{ fontSize: "18px" }} label="빌리기" />
                <Tab sx={{ fontSize: "18px" }} label="빌려주기" />
                <Tab sx={{ fontSize: "18px" }} label="물품 지도" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <CategoryList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <SeekingList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            {/* <TabPanel value="1">
        <CategoryList />
    </TabPanel>
    <TabPanel value="2">Item Two</TabPanel>
    <TabPanel value="3">Item Three</TabPanel> */}
        </div>
    );
};

export default MainTab;
