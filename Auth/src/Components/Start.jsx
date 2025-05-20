

import { use } from 'react';
import {useNavigate} from 'react-router-dom'





const Start = () => {
   
    const navigate = useNavigate();

    const callLogin =()=> navigate('/login');
    const callSignup =()=> navigate('/signup')

    return (
        <>
            <button onClick={callSignup}>SignUp</button>
            <button onClick={callLogin}>Login</button>

        </>
    )
}

export default Start;