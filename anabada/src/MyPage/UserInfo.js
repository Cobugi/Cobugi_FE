import React, { useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";
import UserProduct from "./UserProduct";

const UserInfo = () => {
  const curEmail = localStorage.getItem("currentUser");
  const curName = localStorage.getItem("currentUser").split("@")[0];

  const curUserProduct = UserProduct({ curEmail, curName });
  const myRegister = curUserProduct.getRegister();
  const mySeek = curUserProduct.getSeekItem();
  const myLend = curUserProduct.getLendItem();

  return (
    <>
      <Paper
        sx={{
          height: "600px",
          width: "300px",
          backgroundColor: "white",
          borderRadius: 5,
          border: 0,
          padding: "10px",
          elevation: 3,
        }}
      >
        <Box margin={2}>
          <Typography variant="h4" align="center">
            대여 관리
          </Typography>
        </Box>
        <Box margin={2}>
          <Box
            sx={{
              margin: "auto",
              border: 0,
              backgroundColor: grey[300],
              height: "70px",
              width: "70px",
              borderRadius: 50,
            }}
          />
          <Typography
            variant="h5"
            color={grey[600]}
            align="center"
            marginTop={1}
          >
            {curName}
          </Typography>
        </Box>
        <Box margin={2}>
          <Box
            sx={{
              border: 1,
              height: "40px",
              width: "150px",
              margin: "auto",
              marginTop: 3,
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              등록 물건
            </Typography>
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              건수 : {myRegister.length}
            </Typography>
          </Box>
          <Box
            sx={{
              border: 1,
              height: "40px",
              width: "150px",
              margin: "auto",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              빌린 물건
            </Typography>
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              건수 : {mySeek.length}
            </Typography>
          </Box>
          <Box
            sx={{ border: 1, height: "40px", width: "150px", margin: "auto" }}
          >
            <Typography
              sx={{
                width: "60%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              빌려준 물건
            </Typography>
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              건수 : {myLend.length}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: 0,
            height: "40px",
            width: "150px",
            margin: "auto",
            marginTop: 1,
            marginBottom: 1,
          }}
        ></Box>
        <Box margin={2}>
          <Box
            sx={{
              border: 1,
              height: "50px",
              width: "150px",
              margin: "auto",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              연체 물품
            </Typography>
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              //
            </Typography>
          </Box>
          <Box
            sx={{ border: 1, height: "50px", width: "150px", margin: "auto" }}
          >
            <Typography
              sx={{
                width: "60%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              미반납 물품
            </Typography>
            <Typography
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -150%)",
              }}
            >
              //
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default UserInfo;
