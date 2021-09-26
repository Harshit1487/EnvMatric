import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
const Post = ({ posts }) => {
  return (
    <>
      <div className="container mainpost">
        <h1 className=' text-center my-3'>Environment Blog</h1>
        <p> Let us Collaborate and share how we can save the environment on an Individual level. Projects, Articles, DIYs or anything else is welcome.</p>
        <div className='Postss'>
          {posts.map((post) => (
            <div className='my-4 mx-auto  postid' key={post._id}>
                <h2 className='links postext'>{post.title}</h2>
              <p className='postdate'>
                Posted on {post.createdAt.slice(0, 10)} at
                {post.createdAt.split('T')[1].split('.')[0]}
              </p>
              <br />
              <p className='postcontent'>{post.content}</p>
            </div>

          
          ))}

        </div>
      </div>
    </>
  )
}

export default Post