import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {signUp} from '../api'; // signUp 함수를 정의한 파일의 경로로 수정
import '../Styles.css'; // CSS 파일을 import 합니다.

function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        userType: 'user'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(formData);
            if (response.result) {  // 'success' 대신 'result' 사용
                console.log('회원가입 성공:', response);
                alert(response.message);
                navigate('/login');
            } else {
                console.error('회원가입 실패:', response);
                alert(response.message);
            }
        } catch (error) {
            console.error('회원가입 요청 실패:', error);
            alert('서버 오류로 회원가입에 실패했습니다.');
        }
        setFormData({
            id: '',
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            userType: 'user'
        });
    }

    return (
        <div className="signup-container">
            <h2 className="signup-title">회원가입</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="아이디"
                    required
                    className="signup-input"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일"
                    required
                    className="signup-input"
                />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름"
                    required
                    className="signup-input"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    required
                    className="signup-input"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="비밀번호 확인"
                    required
                    className="signup-input"
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="전화번호"
                    className="signup-input"
                />
                <button type="submit" className="signup-button">회원가입</button>
                <button type="button" className="back-button" onClick={() => navigate('/')}>뒤로가기</button>
            </form>
        </div>
    );
}

export default SignUpForm;
