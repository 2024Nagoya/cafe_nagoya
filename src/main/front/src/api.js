import axios from 'axios';

export const signUp = async (formData) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
