import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import * as locales from "react-date-range/dist/locale";
import Avatar from "@mui/material/Avatar";
import { Message } from "iconsax-react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

export default function ProductModal(props) {
    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);
    React.useEffect(() => {
        setState([
            {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
            },
        ]);
    }, []);
    return (
        <Modal
            keepMounted
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ width: 200 }}>
                    <img
                        src={props.image}
                        style={{
                            width: 300,
                            height: 300,
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
                    {props.title}
                </Typography>
                <Typography
                    sx={{ fontSize: "13px", marginBottom: "20px" }}
                    color="#4470E1"
                >
                    {props.cost} 원/일
                </Typography>
                <Typography sx={{ fontSize: "13px" }} component="div">
                    {props.content}
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
                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    locale={locales["ko"]}
                    ranges={state}
                />
                <Button
                    variant="contained"
                    sx={{ verticalAlign: "bottom", marginLeft: 3 }}
                    endIcon={<Message size="16" color="white" />}
                >
                    대화하기
                </Button>
            </Box>
        </Modal>
    );
}
