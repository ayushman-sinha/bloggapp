import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Posts from '../Posts/Posts'
import Sidebar from '../Sidebar/Sidebar'
const Home = () => {
  return (
    <div>     
      <Header></Header>
      <div className='Home'>
        <Posts></Posts>
        <Sidebar></Sidebar>
      </div>
      
      
    </div>
  )
}

export default Home