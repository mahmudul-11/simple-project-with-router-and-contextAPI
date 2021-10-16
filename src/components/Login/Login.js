import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const {user,signInWithGoogle} = useAuth()
    return (
        <div className='form-style'>
            <div>
                <h2>Please Log in</h2>
                <form onSubmit=''>
                    <input type="eamil" className='input-style' name="" id="" placeholder="Put your Email" /> <br />
                    <input type="password" className='input-style' name="" id="" placeholder="Put your Password" /> <br />
                    <input type="submit" className='btn-regular' value="Log in" />
                </form>
                <p>New user? <Link to='./register'> Register</Link></p>
                <p>----------------or-------------------</p>
                <button onClick={signInWithGoogle}>Google Sign in</button>

            </div>
        </div>
    );
};

export default Login;