import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { isLoggedIn, accessToken, refreshToken } from '../Store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [data, setData] = useState({ name: "", password: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const update = (e) => {
        setData((p) => ({
            ...p, [e.target.name]: e.target.value
        }));
    };

    const submitCall = async (e) => {
        e.preventDefault();

        const allToken = await axios.post("http://localhost:3000/login", data);

        if (!allToken.data.user) {
            dispatch(isLoggedIn(true));
            dispatch(accessToken(allToken.data.token));
            dispatch(refreshToken(allToken.data.refreshToken));
            navigate('/Home');
        } else {
            console.log(allToken.data.user);
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={submitCall}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={data.name}
                        onChange={update}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={data.password}
                        onChange={update}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
