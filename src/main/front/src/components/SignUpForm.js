import React, { useState } from 'react';
import axios from 'axios';
import signUp from '../App'; // signUp 함수를 정의한 파일의 경로로 수정

function SignUpForm() {
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
            console.log('회원가입 성공:', response);
            // 성공 처리 로직 추가
        } catch (error) {
            console.error('회원가입 실패:', error);
            // 실패 처리 로직 추가
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="아이디" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" required />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="이름" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" required />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="비밀번호 확인" required />
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="전화번호" />
            <button type="submit">가입하기</button>
        </form>
    );
}

export default SignUpForm;
