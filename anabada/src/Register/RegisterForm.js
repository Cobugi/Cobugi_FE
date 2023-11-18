import React from "react";
import PrimarySearchAppBar from "../Header/header";
import { Paper, Box, TextField, Butto, Grid, Button, Select, Input, Tab } from "@mui/material";
import './container.css'
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import CATEGORY from "../Category/CATEGORYS";

export default function RegsiterForm({userid}){
    const handleSubmit = () => {
        //물건 등록 함수
        //물건 등록 logic
        console.log('물건등록완료');
    }

    const [image, setImage] = useState("empty.jpg");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } 
    };


    return(
        <>
            <PrimarySearchAppBar/>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Paper
                    className="container"
                    component="form"
                    elevation={3}
                    sx={{
                    width: "80%",
                    height: "70%",
                    padding: "2%",
                    overflow: "auto", // Set overflow to enable scrolling
                    
                }}
                >
                    <div className="item1">
                        <TextField id="productTitle" label="제목 입력" variant="outlined" />
                        <TextField id="registereUserName" label="물건 이름 입력" variant="outlined" />
                        <TextField id="productPrice" label="1일 가격 입력" variant="outlined" />
                        <TextField id="place" label="대여 장소 입력" variant="outlined" />
                    </div>
                    <div className="item2">
                        <Select id="state">
                            <MenuItem value={0} defaultChecked>빌려요/구해요</MenuItem>
                            <MenuItem value={1}>빌려줄게요</MenuItem>
                            
                        </Select>
                        <Select id="productCartegory">
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            {/* {카테고리 내용 추가} */}
                            
                        </Select>
                        <Input id="productDescription" rows="4"  multiline placeholder="물건 상세 설명 입력"/>

                        
                    </div>
                        
                    <div className="item3">
                        <input id="productImage" type="file" onChange={handleImageChange} />
                        {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
                        <Button variant="contained" type="submit" onClick={handleSubmit} sx={{width:"100px"}} >물건 등록</Button>                     
                    </div>
                    
                    
                
                </Paper>
            </Box>
        </>
    )
}

