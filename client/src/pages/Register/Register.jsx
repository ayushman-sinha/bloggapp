import React from 'react';
import './Register.css';
import  background from '../..//assets/register_background.svg'
const Login = () => {
  return (
    <div className='login'>
         <img className='backgroundEdit' src={background} />
        <form  className="loginForm">
            <div className="heading">
                Register
            </div>            
            <div className="registerLogin">
                <div classname="headLabel">
                    Email
                </div>
                <input type='email' placeholder='Enter Email'></input>
            </div>
            <div className="registerLogin">
                <div classname="headLabel">
                    Password
                </div>
                <input type='password' placeholder='Enter Password'></input>
            </div>
            <div className="registerLogin">
                <div classname="headLabel">
                    Confirm Password
                </div>
                <input type='password' placeholder='Re-enter Password'></input>
            </div>
            <button className="loginButton">Login</button>
        </form>
    </div>
  )
}

export default Login