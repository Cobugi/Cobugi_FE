import SeekingProductsData from "../Data/SeekingProductsData.json"
import { atom } from "recoil"
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const seekingProductsState = atom({
    key : 'seekingProductsState',
    default : SeekingProductsData,
    effects_UNSTABLE: [persistAtom]
});