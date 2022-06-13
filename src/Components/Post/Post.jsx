import React from 'react'
import './Post.css'
const Post = () => {
  return (
    <div className='post'>
        <img className='postImag' src="https://fakeimg.pl/510x300/ff0000,128/000,255"></img>
        <div className="postInfo">
            <div className="postCats">
                <div className="postCat">MUSIC</div>
                <div className="postCat">LIFE</div>
            </div>
            <div className="postTitle">
                Lorem ipsum dolor sit amet
            </div>
            <div className="postDate">1 hour ago</div>
        </div>
        <div className="postDescription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam saepe ad ullam sit sint nulla, dolores, reiciendis eos 
            consequuntur delectus cum a pariatur dolore. Consequatur incidunt
            officia voluptate expedita numquam
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam saepe ad ullam sit sint nulla, dolores, reiciendis eos 
            consequuntur delectus cum a pariatur dolore. Consequatur incidunt
            officia voluptate expedita numquam
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam saepe ad ullam sit sint nulla, dolores, reiciendis eos 
            consequuntur delectus cum a pariatur dolore. Consequatur incidunt
            officia voluptate expedita numquam
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam saepe ad ullam sit sint nulla, dolores, reiciendis eos 
            consequuntur delectus cum a pariatur dolore. Consequatur incidunt
            officia voluptate expedita numquam
        </div>
    </div>
  )
}

export default Post