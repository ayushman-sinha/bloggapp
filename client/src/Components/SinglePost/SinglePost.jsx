import './SinglePost.css'
import { Icon } from '@iconify/react';
import {useLocation} from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/Context';
import { useContext } from 'react';

const SinglePost = () => {
  const PF="http://localhost:3500/images/";
  const {user} = useContext(AuthContext)

  const [post, setPost] = useState([]);
  const location=useLocation().pathname.split('/')[2]
  const[date1,setDate1]=useState('')
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${location}`)
      setPost(res.data)
      setDate1(new Date(res.data.createdAt).toDateString())
    }
    fetchPost()
  }, [location])
  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete this post?")){
      try {
        await axios.delete(`/posts/${location}`, { data: { username: user.username } })
        window.location.replace("/")
      } catch (err) {
        console.log(err)
      }
    }        
  }
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img className='postImag' src={PF+post.image}></img>
            <div className='singlePostTitle'>
              {post.title}
              {user&&user.username===post.username?<div className="singlePostEdit">
                <Icon className='singlePostIcon' color='teal' icon="akar-icons:edit" width="32" height="32" />
                <Icon className='singlePostIcon' color='tomato' icon="fluent:delete-12-regular" width="32" height="32" onClick={(e)=>handleDelete()}  />
              </div>:<></>}

            </div>
            <div className="singlePostInfo">
              <div className="singlePostAuthor">
                Author : &nbsp;
                <Link to={`/?username=${post.username}`} className='link'>                  
                  {post.username}
                </Link>
              </div>
              <div className="singlePostDate">
                {date1}
              </div>
            </div>
            <div className="singlePostDescription">
              {post.description}
            </div>
        </div>
    </div>
  )
}

export default SinglePost