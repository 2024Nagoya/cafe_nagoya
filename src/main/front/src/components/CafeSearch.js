import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {signUp} from '../api'; // signUp 함수를 정의한 파일의 경로로 수정
import '../Styles.css'; // CSS 파일을 import 합니다.

function CafeSearch() {
    const navigate = useNavigate();

    return (
        document.write(`여기에 이제 지도 나오면 됨`)
    );
}

export default CafeSearch;