import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Landing from "./Landing";

const App = () => {
    //Test
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
