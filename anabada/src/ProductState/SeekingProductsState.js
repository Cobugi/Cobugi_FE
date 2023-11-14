import SeekingProductsData from "../Data/SeekingProductsData.json"
import { atom } from "recoil"

export const seekingProductsState = atom({
    key : 'seekingProductsState',
    default : SeekingProductsData
});