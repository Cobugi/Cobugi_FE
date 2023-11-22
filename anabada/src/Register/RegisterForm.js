import React from "react";
import PrimarySearchAppBar from "../Header/header";
import { Paper, Box, TextField, Butto, Grid, Button, Select, Input, Tab } from "@mui/material";
import './container.css'
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from "react";
import CATEGORY from "../Category/CATEGORYS";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { lendingProductsState } from "../ProductState/LendigProductsState";
import { seekingProductsState } from "../ProductState/SeekingProductsState";

export default function RegsiterForm({userid}){

    //prodictTitle, productPrice, place, productPrice, productDescription관련 (완료)
     const [formData, setFormData] = useState({
         "productTitle": '',
         "productName" : '',
         "productPrice": '',
         "place": '',
         "productDescription": ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    //물건 올린날짜 내린날짜 관련 (완료)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
        const day = String(formattedDate.getDate()).padStart(2, '0');
        setStartDate(`${month}-${day}-${year}`);

        
    };
      
    const handleEndDateChange = (date) => {
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
        const day = String(formattedDate.getDate()).padStart(2, '0');
        setEndDate(`${month}-${day}-${year}`);
    };

    
    //이미지 객체 다루기, 보여주고 setImage로 등록한 이미지로 문자열 변경 해야한다.(미완성)
    const [image, setImage] = useState("empty.jpg");
    const [imageName, setImageName] = useState("empty.jpg"); // 파일 이름을 저장할 state

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        
         // 파일 이름 추출
         const fileName = file.name;
         setImageName(fileName); // 파일 이름 저장
    };
  


    //빌려요 / 구해요 관련 (완성) 
    const [choose, setChoose] = useState('1');
    
    const handleChooseChange = (e) => {
        const selectedValue = e.target.value;
        setChoose(selectedValue);
    };
    
    
    //카테고리 관련 (완성)
    ////
    const [category, setCategory] = useState('9');
    const handleCategoryChange = (e) =>{
        const selectedValue = e.target.value;
        setCategory(selectedValue);
    }


    const seekingProductsData = useRecoilValue(seekingProductsState)
    const setSeekingProductsState = useSetRecoilState(seekingProductsState);
    const lendingProductsData = useRecoilValue(lendingProductsState)
    const setLendingProductsState = useSetRecoilState(lendingProductsState);
     //버튼 눌렀을때 새로운 객체 생길예정 각각 데이터에 등록 (미완성)
    const handleSubmit = () => {
        // 빌려요/구해요
        const seekingProductsLastIndex = seekingProductsData.length - 1;
        const seekingProductsLastItemProductId = parseInt(seekingProductsData[seekingProductsLastIndex].ProductId);
        const lendingProductsLastIndex = lendingProductsData.length - 1;
        const lendingProductsLastItemProductId = parseInt(lendingProductsData[lendingProductsLastIndex].ProductId);

        console.log(seekingProductsLastItemProductId);
        if(choose === '0'){
            const newData ={
                "ProductId": seekingProductsLastItemProductId+1, // seekingProductsData의 마지막 인덱스의 productId값의 + 1 
                "registeredUserId": localStorage.getItem('currentUser'), //localStorage에서 currentUser의 값
                "registeredUserName": localStorage.getItem('currentUser').split('@')[0],  //localStorage에서 currentUser의 값에서 @gmail 삭제한 부분
                "productTitle": formData.productTitle, 
                "productImage": `/SeekingProductImage/${imageName}`, /// SeekingProductImage/이미지 이름 추가
                "productName": formData.productName,
                "productDescription": formData.productDescription,
                "productCartegory": category, 
                "productPrice": formData.productPrice,
                "place": formData.place,
                "state": "0", // 0 고정
                "rentalDate": "", //비워놓기
                "returnDate": "", //비워놓기
                "lendingUserId": "", //비워놓기
                "lendingUserName": "" //비워놓기
            }
            setSeekingProductsState([...seekingProductsData, newData]);
        }
        
        
        // 빌려줄게요
        if(choose === '1'){
            const newData ={
                "ProductId": lendingProductsLastItemProductId+1, // seekingProductsData의 마지막 인덱스의 productId값의 + 1 
                "registeredUserId": localStorage.getItem('currentUser'), //localStorage에서 currentUser의 값
                "registeredUserName": localStorage.getItem('currentUser').split('@')[0],  //localStorage에서 currentUser의 값에서 @gmail 삭제한 부분
                "productTitle": formData.productTitle, 
                "productImage": `/LendingProductImage/${imageName}`, /// SeekingProductImage/이미지 이름 추가
                "productName": formData.productName,
                "productDescription": formData.productDescription,
                "productCartegory": category, 
                "productPrice": formData.productPrice,
                "place": formData.place,
                "state": "0", // 0 고정
                "startDate": startDate,
                "lastDate": endDate,
                "reservedUsersInfo": [] //비워놓기
            }
            setLendingProductsState([...lendingProductsData, newData]);
        }
    };

    console.log(seekingProductsData)    

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
                        <TextField id="productTitle" label="제목 입력" variant="outlined" onChange={handleInputChange} />
                        <TextField id="productName" label="물건 이름 입력" variant="outlined" onChange={handleInputChange} />
                        <TextField id="productPrice" label="1일 가격 입력" variant="outlined" onChange={handleInputChange} />
                        <TextField id="place" label="대여 장소 입력" variant="outlined" onChange={handleInputChange} />
                    </div>
                    <div className="item2">
                        <Select id="choose" onChange={handleChooseChange}>
                            <MenuItem value={'0'} defaultChecked>빌려요/구해요</MenuItem>
                            <MenuItem value={'1'}>빌려줄게요</MenuItem>
                        </Select>
                        <Select id="productCartegory" onChange={handleCategoryChange}>
                            <MenuItem value={'1'}>주방용품</MenuItem>
                            <MenuItem value={'2'}>문구</MenuItem>
                            <MenuItem value={'3'}>가전디지털</MenuItem>
                            <MenuItem value={'4'}>가구</MenuItem>
                            <MenuItem value={'5'}>도서/음반</MenuItem>
                            <MenuItem value={'6'}>스포츠/레저</MenuItem>
                            <MenuItem value={'7'}>여행</MenuItem>
                            <MenuItem value={'8'}>취미</MenuItem>
                            <MenuItem value={'9'}>기타</MenuItem>                  
                            {/* {카테고리 내용 추가} */}                     
                        </Select>
                                      
                        <Input id="productDescription" rows="4"  multiline placeholder="물건 상세 설명 입력" onChange={handleInputChange}/>
                        {choose === '1' && ( // choose가 '1'일 때만 DatePicker를 렌더링 //빌려주기일 경우 -> DatePicker 보이기
                        <div className="date-picker-container">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                {/* DatePicker */}
                                <DatePicker id="startDate" label="startDate" onChange={handleStartDateChange} />
                                <DatePicker id="endDate" label="endDate" onChange={handleEndDateChange} />
                            </LocalizationProvider>
                        </div>
                        )}                       
                    </div>
                        
                    <div className="item3">
                        <input id="productImage" type="file" onChange={handleImageChange}  />
                        {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
                        <Button variant="contained" type="submit" onClick={handleSubmit} sx={{width:"100px"}} >물건 등록</Button>                     
                    </div>              
                </Paper>
            </Box>
        </>
    )
}