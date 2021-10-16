import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-style'>
        <div>
            <h2>Please Register</h2>
            <form onSubmit=''>
                <input type="eamil" name="" id="" className='input-style' placeholder="Put your Email"/><br />
                <input type="password" name="" id="" className='input-style' placeholder="Put your Password" /> <br />
                <input type="submit"   className='btn-regular'   value="Register" />
            </form>
            <p>Already Registered? <Link to='./login'> Sign in</Link></p>
            <p>----------------or-------------------</p>
            <button>Google Sign in</button>

        </div>
    </div>
    );
};

export default Register;