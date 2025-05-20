import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isLoggedIn, accessToken, refreshToken } from '../Store/authSlice.js'
import { useNavigate } from 'react-router-dom'
const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(isLoggedIn(false));
        dispatch(accessToken(null));
        dispatch(refreshToken(null));
        navigate('/Home')
    }, [dispatch,navigate]);



    return null;
}

export default Logout






