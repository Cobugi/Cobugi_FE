import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Header/header";
import List from "./Main/List";
import Signin from "./Signupin/Signin";
import Signup from "./Signupin/Signup";
import CategoryList from "./Category/CategoryList";
import SeekingList from "./Category/SeekingList";
import VerticalTabs from "./Chatting/ChatList";
import ChatPage from "./Chatting/ChatPage";
import MainTab from "./Main/Tabs";

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
                <Route
                    path="/seeking"
                    element={
                        <>
                            <PrimarySearchAppBar />
                            <SeekingList />
                        </>
                    }
                />
                <Route path="/chat" element={<VerticalTabs />} />
                {/* <Route path="/chat" element={<ChatPage />} /> */}
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;