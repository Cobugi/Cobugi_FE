import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

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
    return (
        <Modal
            keepMounted
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ width: 400 }}>
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
                    sx={{ fontSize: "11px", marginBottom: "5px" }}
                >
                    {props.writer}
                </Typography>
                <Typography
                    gutterBottom
                    sx={{ fontSize: "11px", fontWeight: "bold" }}
                    component="div"
                >
                    {props.title}
                </Typography>
                <Typography
                    sx={{ fontSize: "13px", marginBottom: "8px" }}
                    color="#4470E1"
                >
                    {props.cost} 원/일
                </Typography>
            </Box>
        </Modal>
    );
}
