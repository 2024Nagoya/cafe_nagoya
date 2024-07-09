import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles.css';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 로그인 로직 구현
        console.log('Login attempt with:', id, password);
    };

    return (
        <div className="login-container">
            <h2 className="login-title">로그인</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="아이디"
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <button className="login-button" type="submit">로그인</button>
                <div className="button-group">
                    <button className="secondary-button" onClick={() => navigate('/')} type="button">메인 페이지</button>
                    <button className="secondary-button" onClick={() => navigate('/api/auth/signup')} type="button">회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default Login;