import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "../firebase-config";
import { useFirestoreQuery } from "./hooks";
import ChatPage from "./ChatPage";
import { useLocation } from "react-router-dom";
import PrimarySearchAppBar from "../Header/header";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const [collections, setCollections] = React.useState([]);

    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const collectionsRef = firestore.collection("userOwnedRooms");
    const currentUser = localStorage.getItem("currentUser");
    const collectionList = useFirestoreQuery(
        collectionsRef.where("user", "==", `${currentUser}`)
    );

    console.log(collectionList);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <PrimarySearchAppBar />
            <hr />
            <Box sx={{ display: "flex" }}>
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        width: "200px",
                        maxHeight: "100vh",
                        overflowY: "auto",
                    }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="수직 탭 예시"
                        sx={{ borderRight: 1, borderColor: "divider" }}
                    >
                        {collectionList.map((collection, index) => (
                            <Tab
                                key={index}
                                label={
                                    collection.id
                                        .replace(/\D*\d/, "")
                                        .split("@")[0]
                                }
                            />
                        ))}
                    </Tabs>
                </Box>
                <Box sx={{ flex: 1, width: "100%" }}>
                    {collectionList.map((collection, index) => (
                        <CustomTabPanel key={index} value={value} index={index}>
                            <ChatPage room={collection.room} />
                        </CustomTabPanel>
                    ))}
                </Box>
            </Box>
        </>
    );
}
