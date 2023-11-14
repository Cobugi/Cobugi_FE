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
    const [value, setValue] = React.useState(0);
    const [collections, setCollections] = React.useState([]);

    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const collectionsRef = firestore.collection("AllMessages");

    const collectionList = useFirestoreQuery(
        collectionsRef.orderBy("createdAt", "desc")
    );

    console.log(collectionList);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
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
                {collectionList?.map((collection, index) => (
                    <Tab label={collection.id}></Tab>
                ))}
            </Tabs>
        </Box>
    );
}
