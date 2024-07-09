import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreenForm from './components/MainScreenForm';
import SignUpForm from './components/SignUpForm'; // SignUpForm 컴포넌트의 경로를 정확하게 지정해야 합니다.
import Login from './components/Login';
import CafeSearch from "./components/CafeSearch"; // SignUpForm 컴포넌트의 경로를 정확하게 지정해야 합니다.

function App() {
    return (
       <Router>
           <Routes>
               <Route path="/" element={<MainScreenForm />} />
               <Route path="/api/auth/signup" element={<SignUpForm />} />
               <Route path="/login" element={<Login />} />
               <Route path="/CafeSearch" element={<CafeSearch />} />
           </Routes>
       </Router>
    );
}

export default App;