import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {signInWithGoogle,logOut,user} = useFirebase();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.displayName? 
                        <p style={{color:'white'}}>{user.displayName} <button onClick={logOut}>Log out</button></p>
                        
                    :
                    <NavLink to="/login">Log in</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;