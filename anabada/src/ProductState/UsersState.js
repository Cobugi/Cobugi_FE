import UsersData from "../Data/UsersData.json";
import { atom, selector, useRecoilState, useSetRecoilState } from "recoil";
import { getAuth } from "firebase/auth";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const updateUserBookmarks = selector({
    key: "updateUserBookmarks",
    get: ({ get, set }) => {
        const currentUser = localStorage.getItem("currentUser");
        const userData = get(usersState);
        //const setUserDataState = useSetRecoilState(UsersData);
        // const [userData, setUserData] = useRecoilState(UsersData);
        console.log(currentUser);
        if (!currentUser) {
            console.log("@@@@@@1");
            return null; // 로그인되지 않은 경우 처리
        }

        const foundUser = userData.find((user) => user.id === currentUser);
        console.log(userData);
        if (!foundUser) {
            console.log("@@@@@@2");
            return null; // 유저 정보를 찾을 수 없는 경우 처리
        }

        const userBookmarks = foundUser.bookMarkData;
        // const setUserData = useSetRecoilState(UsersData);/
        console.log(userBookmarks);

        const updateBookmark = (productId) => {
            const index = userBookmarks.findIndex(
                (item) => item.ProductId === productId
            );
            var updatedBookMarkData;

            if (index === -1) {
                updatedBookMarkData = [
                    ...userBookmarks,
                    { ProductId: productId },
                ];
            } else {
                updatedBookMarkData = [
                    ...userBookmarks.slice(0, index),
                    ...userBookmarks.slice(index + 1),
                ];
            }

            // 변경된 유저 데이터 업데이트
            return [
                ...userData.filter((user) => user.id !== currentUser),
                { ...foundUser, bookMarkData: updatedBookMarkData },
            ];
        };
        console.log(userBookmarks);

        return { userBookmarks, updateBookmark };
    },
});

export const usersState = atom({
    key: "usersState",
    default: UsersData,
    effects_UNSTABLE: [persistAtom],
});
