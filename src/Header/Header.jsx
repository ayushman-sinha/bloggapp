import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <div className='HeaderTitle'>
        <div className="HeaderTitleSmall">Ayushman Sinha</div>
        <div className="HeaderTitleLarge">Web Developer</div>
      </div>
      <div className="HeaderImage">
        <img src="https://fakeimg.pl/1050x600/ff0000,128/000,255"></img> 
      </div>
    </div>
  )
}

export default Header