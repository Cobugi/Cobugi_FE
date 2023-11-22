import LendingProductsData from "../Data/LendingProductsData.json"
import { atom } from "recoil"
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const lendingProductsState = atom({
    key : 'lendingProductsState',
    default : LendingProductsData,
    effects_UNSTABLE: [persistAtom]
});