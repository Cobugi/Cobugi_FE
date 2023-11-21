import UsersData from "../Data/UsersData.json";
import { atom, selector, useRecoilState, useSetRecoilState } from "recoil";
import { getAuth } from "firebase/auth";

export const updateUserBookmarks = selector({
    key: "updateUserBookmarks",
    get: ({ get }) => {
        const currentUser = localStorage.getItem("currentUser");
        const userData = get(usersState);
        //const setUserDataState = useSetRecoilState(UsersData);
        // const [userData, setUserData] = useRecoilState(UsersData);
        console.log(currentUser);
        if (!currentUser) {
            return null; // 로그인되지 않은 경우 처리
        }

        const foundUser = userData.find((user) => user.id === currentUser);

        if (!foundUser) {
            console.log("@@@@@@2");
            return null; // 유저 정보를 찾을 수 없는 경우 처리
        }

        const userBookmarks = foundUser.bookMarkData;
        // const setUserData = useSetRecoilState(UsersData);/
        console.log(userBookmarks);
        return userBookmarks;

        // const updateBookmark = (productId) => {
        //     const index = userBookmarks.findIndex(
        //         (item) => item.ProductId === productId
        //     );

        //     if (index === -1) {
        //         // 북마크되어 있지 않으면 추가
        //         foundUser.bookMarkData = [
        //             ...userBookmarks,
        //             { ProductId: productId },
        //         ];
        //     } else {
        //         // 북마크되어 있다면 제거
        //         foundUser.bookMarkData = [
        //             ...userBookmarks.slice(0, index),
        //             ...userBookmarks.slice(index + 1),
        //         ];
        //     }

        //     // 변경된 유저 데이터 업데이트
        //     set(UsersData, [
        //         ...userData.filter((user) => user.id !== currentUser.id),
        //         foundUser,
        //     ]);
        //     return [
        //         ...userData.filter((user) => user.id !== currentUser),
        //         foundUser,
        //     ];
        // };
    },
    set: ({ set, get }, newValue) => {
        var userBookmarks = get(updateUserBookmarks);
        const currentUser = localStorage.getItem("currentUser");
        const index = userBookmarks.findIndex(
            (item) => item.ProductId === newValue
        );

        if (index === -1) {
            // 북마크되어 있지 않으면 추가
            userBookmarks = [...userBookmarks, { ProductId: newValue }];
        } else {
            // 북마크되어 있다면 제거
            userBookmarks = [
                ...userBookmarks.slice(0, index),
                ...userBookmarks.slice(index + 1),
            ];
        }
        console.log(userBookmarks);

        const UsersData = get(usersState);
        console.log(UsersData);
        // 변경된 유저 데이터 업데이트
        set(usersState, [
            ...UsersData.filter((user) => user.id !== currentUser),
            { id: currentUser, bookMarkData: [...userBookmarks] },
        ]);
        console.log(get(usersState));
    },
});

export const usersState = atom({
    key: "usersState",
    default: UsersData,
});
