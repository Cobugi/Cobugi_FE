/* eslint-disable*/

import React, { useEffect } from "react";
import LendingProductsData from "../Data/LendingProductsData.json"
import { ListItem, ListItemText } from '@mui/material';

const BookmarkItem = ({ ProductId }) => {

    const products = LendingProductsData.filter(({lendingProductId}) => lendingProductId === ProductId)
    
    return (    
        <>
            { 
                products.map((item, idx) => 
                <ListItem>
                    <ListItemText primary={ `전달 받은 productId : ${ProductId}` }/>
                </ListItem>
                )
            }
        </>
    )
}

export default BookmarkItem