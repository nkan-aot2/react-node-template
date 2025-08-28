import axios from 'axios';

const API_URL = 'http://localhost:5000/user/';

interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
}

const saveUser = async (userData: User): Promise<unknown> => {
    const response = await axios.post(API_URL, userData);
    return response.data;
};

const userService = {
    saveUser,
};

export default userService;