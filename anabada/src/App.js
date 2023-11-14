// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Header/header";
import List from "./Main/List";
import Signin from "./Signupin/Signin";
import Signup from "./Signupin/Signup";
import CategoryList from "./Category/CategoryList";
import VerticalTabs from "./Chatting/ChatList";
import ChatPage from "./Chatting/ChatPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <PrimarySearchAppBar />
                            <CategoryList />
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
