// import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./Header/header";
import List from "./Main/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signupin/Signin";
import Signup from "./Signupin/Signup";

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <PrimarySearchAppBar />
                            <List />
                        </>
                    }
                />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
