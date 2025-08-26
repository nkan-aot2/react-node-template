import axios from 'axios';

const API_URL = 'http://localhost:5000/user/';

const saveUser = async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
};

const userService = {
    saveUser,
};

export default userService;
