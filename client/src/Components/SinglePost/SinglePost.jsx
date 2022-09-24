import './SinglePost.css'
import { Icon } from '@iconify/react';
import {useLocation} from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios'
const SinglePost = () => {
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
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img className='postImag' src={post.image}></img>
            <div className='singlePostTitle'>
              {post.title}
              <div className="singlePostEdit">
                <Icon className='singlePostIcon' color='teal' icon="akar-icons:edit" width="32" height="32" />
                <Icon className='singlePostIcon' color='tomato' icon="fluent:delete-12-regular" width="32" height="32" />
              </div>

            </div>
            <div className="singlePostInfo">
              <div className="singlePostAuthor">
                Author : &nbsp;
                {post.username}
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