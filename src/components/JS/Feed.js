import React, { useState } from 'react'
import "../CSS/Feed.css"
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image"
import InputOption from "./InputOption"
import EventNoteIcon from "@material-ui/icons/EventNote"
import SuscriptionsIcon from "@material-ui/icons/Subscriptions"
import Calendar from "@material-ui/icons/CalendarTodayOutlined"
import Post from "./Post"

function Feed() {

  const [post, setpost] = useState([])

  const sendPost = (e) =>
  {
    e.preventDefault()

    setpost([...post])
  }

  return (
    <div className="feed" >
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon /> 

          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit" >Send</button>
          </form>

        </div>

        <div className="feed__inputOptions">          
          <InputOption Icon={ImageIcon} title="Photo" color="#76bfff" />
          <InputOption Icon={SuscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Photo" color="#C0CBCD" />
          <InputOption Icon={Calendar} title="Write article" color="#7FC5E" />
        </div>

      </div>

      {/* Post */}
      {post.map((post) => {
        return <Post />
      })}
      <Post name="! ImDiego" description="This is a test" message="WOW, this are working!" />



    </div>
  )
}

export default Feed
