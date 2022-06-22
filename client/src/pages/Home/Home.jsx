import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
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