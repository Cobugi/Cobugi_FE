import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { addDays, isBefore, isAfter, getQuarter } from "date-fns";
import { firebaseConfig } from "../firebase-config";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { useNavigate } from "react-router-dom";
import * as locales from "react-date-range/dist/locale";
import Avatar from "@mui/material/Avatar";
import { Message } from "iconsax-react";
import CloseIcon from "@mui/icons-material/Close";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
const style = {
    maxHeight: "80vh",
    overflowY: "auto",
    "scrollbar-width": "none", // Firefox
    "-ms-overflow-style": "none", // IE 및 엣지]
    "&::-webkit-scrollbar": {
        display: "none", // Chrome 및 Safari
    },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    height: "auto",
};

export default function ProductModal(props) {
    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);
    const navigate = useNavigate();
    React.useEffect(() => {
        setState([
            {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
            },
        ]);
    }, []);
    const disabledDates = props.reservedUsersInfo?.reduce((acc, reserved) => {
        // 예약된 날짜 범위를 disabledDates 배열에 추가
        const reservedStartDate = new Date(reserved.reservedStartDate);
        const reservedEndDate = new Date(reserved.reservedEndDate);

        for (
            let date = reservedStartDate;
            isBefore(date, reservedEndDate);
            date = addDays(date, 1)
        ) {
            acc.push(date);
        }

        return acc;
    }, []);
    const firebaseNew = () => {
        firebase.initializeApp(firebaseConfig);
        const currentUser = localStorage.getItem("currentUser");
        firebase
            .firestore()
            .collection(`roomUsers`)
            .doc(`${props.lendingProductId}${currentUser}`)
            .set({
                receiver: `${props.registeredUserId}`,
                sender: `${currentUser}`,
            });
        firebase
            .firestore()
            .collection(`userOwnedRooms`)
            .doc(`${props.lendingProductId}${currentUser}`)
            .set({
                room: `${props.lendingProductId}${currentUser}`,
                user: `${props.registeredUserId}`,
            });
        firebase
            .firestore()
            .collection(`userOwnedRooms`)
            .doc(`${props.lendingProductId}${props.registeredUserId}`)
            .set({
                room: `${props.lendingProductId}${currentUser}`,
                user: `${currentUser}`,
            });
        navigate("/chat");
    };
    return (
        <Modal
            keepMounted
            open={props.open}
            height="auto"
            onClose={props.handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={{ ...style, position: "relative" }}>
                <CloseIcon
                    onClick={props.handleClose}
                    sx={{
                        position: "relative",
                        // bottom: 0,
                        // right: 0,
                        // margin: 3,
                        left: 410,
                    }}
                />
                <Box sx={{ width: 200 }}>
                    <img
                        alt="제품 이미지"
                        src={props.productImage}
                        style={{
                            width: 180,
                            height: 180,
                            objectFit: "contain",
                        }}
                    />
                </Box>
                <Typography
                    color="#707070"
                    sx={{
                        fontSize: "11px",
                        marginBottom: "5px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        src="/broken-image.jpg"
                        sx={{ width: 24, height: 24, marginRight: 1 }}
                    />
                    {props.writer}
                </Typography>
                <Typography
                    gutterBottom
                    sx={{ fontSize: "15px", fontWeight: "bold" }}
                    component="div"
                >
                    {props.productTitle}
                </Typography>
                <Typography
                    sx={{ fontSize: "13px", marginBottom: "20px" }}
                    color="#4470E1"
                >
                    {props.productPrice} 원/일
                </Typography>
                <Typography sx={{ fontSize: "13px" }} component="div">
                    {props.productDescription}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "11px",
                        marginTop: "40px",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginRight: 1,
                        }}
                        component="div"
                    >
                        대여장소
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }} component="div">
                        {props.place}
                    </Typography>
                </Typography>

                <DateRange
                    style={{ width: "400px" }}
                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    locale={locales["ko"]}
                    ranges={state}
                    disabledDates={disabledDates}
                />

                <Button
                    variant="contained"
                    // sx={{
                    //     verticalAlign: "bottom",
                    // }}
                    sx={{
                        position: "relative",
                        // right: 0,

                        left: 300,
                        //margin: 3,
                    }}
                    endIcon={<Message size="16" color="white" />}
                    onClick={firebaseNew}
                >
                    대화하기
                </Button>
            </Box>
        </Modal>
    );
}
