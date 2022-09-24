import { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts')
      setPosts(res.data)
     
    }
    fetchPosts()
  }, [])
  return (
    <div>     
      <Header></Header>
      <div className='Home'>
        <Posts posts={posts}></Posts>
        <Sidebar></Sidebar>
      </div>
      
      
    </div>
  )
}

export default Home