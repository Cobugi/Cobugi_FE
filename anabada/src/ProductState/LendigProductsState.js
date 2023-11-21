import LendingProductsData from "../Data/LendingProductsData.json"
import { atom } from "recoil"

export const lendingProductsState = atom({
    key : 'lendingProductsState',
    default : LendingProductsData
});