import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";
import { lendingProductsState } from "../ProductState/LendigProductsState";
import { seekingProductsState } from "../ProductState/SeekingProductsState";
import { useRecoilValue } from "recoil";

const UserInfo = () => {
  const curEmail = localStorage.getItem("currentUser");
  const curName = localStorage.getItem("currentUser").split("@")[0];

  const lend = useRecoilValue(lendingProductsState);
  const seek = useRecoilValue(seekingProductsState);

  //내가 등록한 물건
  //lend와 seek에서 registeredUserId가 나의 id인 경우
  const myRegister_lend = lend.filter(
    (product) => product.registeredUserId === curEmail
  );
  const myRegister_seek = seek.filter(
    (product) => product.registeredUserId === curEmail
  );
  const myRegister = [...myRegister_lend, ...myRegister_seek];

  //내가 빌린 물건은 2가지 경우의 수가 있다.
  // 1. lend 각 원소에 reservedUsersInfo(배열) 각 원소에 "reservedUser"배열에 내 id가 있을 경우..
  const mySeek_lend = lend.filter((product) =>
    product.reservedUsersInfo.some(
      (reservedUser) => reservedUser.reservedUser === curEmail
    )
  );
  //2. seek 각 원소에 registeredUserId가 내 id이고 state가 1인 경우
  const mySeek_seek = seek.filter(
    (product) => product.registeredUserId === curEmail
  );
  //3. 내가 빌린 물건 최종
  const mySeek = [...mySeek_lend, ...mySeek_seek];

  //내가 빌려준 물건은 2가지 경우의 수가 있다.
  //1. lend 각 원소에 registeredUserId가 내 id이고 state가 1인 경우
  const myLend_lend = lend.filter(
    (product) => product.registeredUserId === curEmail && product.state === "1"
  );
  //2. seek 각 원소에 lendingUserId가 나인 경우
  const myLend_seek = seek.filter(
    (product) => product.lendingUserId === curEmail
  );
  //3. 내가 빌려준 물건 최종
  const myLend = [...myLend_lend, ...myLend_seek];

  console.log(myRegister);
  console.log(mySeek);
  console.log(myLend);

  // product에서

  // const mySeek

  //집에 있는 거 사용
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
