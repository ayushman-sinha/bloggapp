import React from 'react'
import './SinglePost.css'
import { Icon } from '@iconify/react';
const SinglePost = () => {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img className='postImag' src="https://fakeimg.pl/1600x900/ff0000,128/000,255"></img>
            <div className='singlePostTitle'>
              Lorem, ipsum dolor sit 
              <div className="singlePostEdit">
                <Icon className='singlePostIcon' color='teal' icon="akar-icons:edit" width="32" height="32" />
                <Icon className='singlePostIcon' color='tomato' icon="fluent:delete-12-regular" width="32" height="32" />
              </div>

            </div>
            <div className="singlePostInfo">
              <div className="singlePostAuthor">
                Ayushman Sinha
              </div>
              <div className="singlePostDate">
                1 hour ago
              </div>
            </div>
            <div className="singlePostDescription">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eaque, quam, ea fugit a,
               iusto vel provident fuga exercitationem laudantium consequuntur. Deserunt quae, eligendi 
               mollitia enim et voluptatum aperiam iure?
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eaque, quam, ea fugit a,
               iusto vel provident fuga exercitationem laudantium consequuntur. Deserunt quae, eligendi 
               mollitia enim et voluptatum aperiam iure?
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eaque, quam, ea fugit a,
               iusto vel provident fuga exercitationem laudantium consequuntur. Deserunt quae, eligendi 
               mollitia enim et voluptatum aperiam iure?
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eaque, quam, ea fugit a,
               iusto vel provident fuga exercitationem laudantium consequuntur. Deserunt quae, eligendi 
               mollitia enim et voluptatum aperiam iure? 
            </div>
        </div>
    </div>
  )
}

export default SinglePost