import React, { useState } from 'react';
import userService from '../services/userService';
import './users.css';

const Users = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.saveUser(formData);
            setMessage('User saved successfully!');
        } catch (error) {
            setMessage('Error saving user.');
        }
    };

    return (
        <div className="users-container">
            <h1 className="users-title">Users</h1>
            <form className="users-form" onSubmit={handleSubmit}>
                <div>
                    <label for="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label for="middleName">Middle Name:</label>
                    <input
                        id="middleName"
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label for="dateOfBirth">Date of Birth:</label>
                    <input
                        id="dateOfBirth"
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Save User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Users;
