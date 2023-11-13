/* eslint-disable*/

import React, { useEffect } from "react";
import LendingProductsData from "../Data/LendingProductsData.json"

const BookmarkItem = ({ ProductId }) => {

    const a = LendingProductsData.filter(({lendingProductId}) => lendingProductId === ProductId)
    
    return (
        <>
            <div>전달 받은 ProductId : { a.map((item, idx) => {
                return <div>{item.productTitle}</div>
            }) }</div>
        </>
    )
}

export default BookmarkItem