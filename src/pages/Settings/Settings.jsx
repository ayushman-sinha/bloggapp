import React from 'react'
import './Settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Icon } from '@iconify/react';
const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <div className="settingsUpdateTitle">Update your Account</div>
                <div className="settingsDeleteTitle">Delete Your Account</div>
            </div>
            <form action="" className="setingsForm">
                <label >Profile Picture</label>
                <div className="settingsProfilePic">
                    <img className='settingsPPImg' src="https://fakeimg.pl/1000x800/ff0000,128/000,255"></img>
                    <label htmlFor='fileInput'>
                        <Icon icon="carbon:user-avatar-filled-alt" width="32" height="32" />
                    </label>
                    <input type='file' id='fileInput' className='profilePicAttach'></input>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Enter Username'></input>
                <label>Email</label>
                <input type='email' placeholder='Enter Email'></input>
                <label>Password</label>
                <input type='password' placeholder='Enter Password'></input>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar></Sidebar>
    </div>
  )
}

export default Settings