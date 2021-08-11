import React from 'react'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import InputOptions from "./InputOption"
import { Avatar } from '@material-ui/core'
import "../CSS/Post.css"

function Post( { name , description , message, photoURL } ) {
  return (
    <div className="post">

      <div className="post__header">

        <Avatar />

        <div className="post__info">
          <h2> { name } </h2>
          <p> { description } </p>
        </div>
      </div>

      <div className="post__body">
        <p> {message} </p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOptions Icon={ ChatOutlined } title="Comment" color="gray" />
        <InputOptions Icon={ ShareOutlined } title="Share" color="gray" />
        <InputOptions Icon={ SendOutlined } title="Send" color="gray"  />
      </div>
    </div>
  )
}

export default Post
