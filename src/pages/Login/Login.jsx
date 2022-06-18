import React from 'react';
import './Login.css';
import  background from '../..//assets/login_background.svg'
const Login = () => {
  return (
    <div className='login'>
         <img className='backgroundEdit' src={background} />
        <form  className="loginForm">
            <div className="heading">
                Login
            </div>            
            <div className="headingLogin">
                <div classname="headLabel">
                    Email
                </div>
                <input type='email' placeholder='Enter Email'></input>
            </div>
            <div className="headingLogin">
                <div classname="headLabel">
                    Password
                </div>
                <input type='password' placeholder='Enter Password'></input>
            </div>
            <button className="loginButton">Login</button>
        </form>
    </div>
  )
}

export default Login