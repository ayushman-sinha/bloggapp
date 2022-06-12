import React from 'react'
import { Icon } from '@iconify/react';
import './Sidebar.css'
const Sidebar = () => {
  
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <div className="sidebarTitle">
          ABOUT ME 
        </div>
        </div>
      <div className="sidebarItem">        
        <img src="https://fakeimg.pl/350x200/ff0000,128/000,255" alt="sidebarImage"></img>        
      </div>
      <div className="sidebarItem">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, accusamus veniam suscipit deserunt tenetur aut dolores </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">
          CATEGORIES  
        </div>
        <ul className="sidebarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Sports</li>
          <li className="sideBarListItem">Technology</li>
          <li className="sideBarListItem">Media</li>
          <li className="sideBarListItem">News</li>
        </ul>
      </div>
      <div className="siderbarItem">
        <div className="sidebarTitle">
          FOLLOW US
        </div>
        <div className="sidebarSocial">
          <Icon className='sidebarIcon' icon="bi:facebook" color="black"  width="32" height="32" />
          <Icon className='sidebarIcon' icon="akar-icons:instagram-fill" color="black" width="32" height="32" />
          <Icon className='sidebarIcon' icon="akar-icons:twitter-fill" color="black" width="32" height="32" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar