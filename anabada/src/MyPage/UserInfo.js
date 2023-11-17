import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";


const UserInfo = () => {
    //집에 있는 거 사용 
    return (
        <>
            <Paper sx={{height:"500px", width:"300px", backgroundColor:"white", borderRadius:5, border:0, padding:"10px", elevation: 3}}>
                <Box margin={2}>
                    <Typography variant="h4" align="center">대여 관리</Typography>
                </Box>
                <Box margin={2}>
                    <Box sx={{margin:"auto", border:0, backgroundColor:grey[300] ,height:"70px", width:"70px", borderRadius:50}}/>
                    <Typography variant="h5" color={grey[600]} align="center" marginTop={1}>유저 이름</Typography>
                </Box>
                <Box margin={2}>
                    <Box sx={{border:1, height:"40px", width:"150px", margin:"auto", marginTop:2, marginBottom:2}}>
                        <Typography sx={{ width: '50%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            빌린 물건
                        </Typography>
                        <Typography sx={{ width: '50%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            건수 : 3
                        </Typography>
                    </Box>
                    <Box sx={{border:1, height:"40px", width:"150px", margin:"auto"}}>
                        <Typography sx={{ width: '60%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            빌려준 물건
                        </Typography>
                        <Typography sx={{ width: '50%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            건수 : 3
                        </Typography>
                    </Box>
                </Box>
                <Box margin={2}>
                    <Box sx={{border:1, height:"50px", width:"150px", margin:"auto", marginTop:2, marginBottom:2}}>
                        <Typography sx={{ width: '50%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            연체 물품
                        </Typography>
                        <Typography sx={{ width: '50%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            //
                        </Typography>
                    </Box>
                    <Box sx={{border:1, height:"50px", width:"150px", margin:"auto"}}>
                        <Typography sx={{ width: '60%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            미반납 물품
                        </Typography>
                        <Typography sx={{ width: '50%',height: '50%', backgroundColor:"white",textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',position: 'relative',top: '50%',left: '50%',transform: 'translate(-50%, -150%)'}}>
                            //
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default UserInfo