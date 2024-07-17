import React from 'react'
import "./Posts.css"
import { PostsData} from '../../../Data/PostsData'
import Post from '../Post/Post'

// Pass the data to " Post " component

const Posts = () => {
  return (
    <section className="Posts">
      {PostsData.map((post, id) => {
         return <Post data={post} key={id} />
      })}
    </section>
  )
}

export default Posts