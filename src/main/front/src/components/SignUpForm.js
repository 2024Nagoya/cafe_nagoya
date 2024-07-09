import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {signUp} from '../api'; // signUp 함수를 정의한 파일의 경로로 수정
import '../SignUpForm.css'; // CSS 파일을 import 합니다.

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
            const response = await signUp(formData); // signUp 함수 호출
            if (response.data.success) {
                console.log('회원가입 성공:', response.data);
                alert(response.data.message); // 성공 메시지 출력
                navigate('/'); // 성공 시 이동
            } else {
                console.error('회원가입 실패:', response.data);
                alert(response.data.message); // 실패 메시지 출력
                navigate('/'); // 실패 시 이동
            }
        } catch (error) {
            console.error('회원가입 실패:', error);
            alert('회원가입에 실패했습니다!');
            navigate('/'); // 실패 시 이동
        }
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
