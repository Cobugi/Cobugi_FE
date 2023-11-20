import LendingProductsData from "../Data/"
import { atom } from "recoil"

export const lendingProductsState = atom({
    key : 'lendingProductsState',
    default : LendingProductsData
});