import React from 'react'
import './NavBar.css'
import { Icon } from '@iconify/react';
export const NavBar = () => {
  return (
    
    <div className='top'>
        <div className='topLeft'>
            <Icon icon="bi:facebook" color="black"  width="32" height="32" />
            <Icon icon="akar-icons:instagram-fill" color="black" width="32" height="32" />
            <Icon icon="akar-icons:twitter-fill" color="black" width="32" height="32" />
        </div>
        <div className='topMiddle'>
            <ul className="topList">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>POST</li>
              <li>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
          <img class='profilePic' src="https://fakeimg.pl/300/"></img>
          <Icon icon="fa:search" color="black" width="22" height="22" />    
        </div>

    </div>
  )
}
