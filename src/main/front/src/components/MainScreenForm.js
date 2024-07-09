import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import '../MainScreenForm.css';

function MainScreenForm() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/api/auth/signup');
    };

    return (
        <div className="main-screen">
            <header className="header">
                <h1>CafeOwl</h1>
                <p>나만의 카페찾기</p>
            </header>
            <main className="content">
                <button className="button">로그인</button>
                <button className="button" onClick={handleSignUp}>회원가입</button>
            </main>
            <footer className="footer">
                <p>&copy; 2024 CafeOwl. All rights reserved.</p>
            </footer>
        </div>
    );
}
export default MainScreenForm;