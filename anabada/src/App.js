import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Header/header";
import Signin from "./Signupin/Signin";
import Signup from "./Signupin/Signup";
import VerticalTabs from "./Chatting/ChatList";
import MainTab from "./Main/Tabs";
import MyPageIndex from "./MyPage/MyPageIndex";
import RegsiterForm from "./Register/RegisterForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <PrimarySearchAppBar />
                            <MainTab />
                        </>
                    }
                />
                <Route path="/chat" element={<VerticalTabs />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mypage" element={<MyPageIndex />} />
                <Route path="/registerform" element={<RegsiterForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
