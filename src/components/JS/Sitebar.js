import { Avatar } from '@material-ui/core'
import React from 'react'
import "../CSS/Sitebar.css"

const recentItem = (topic) =>
{
  return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p> {topic} </p>
    </div>
  )
}

function Sitebar( { name , avatar , banner , email } ) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* There is the banner of the user */}
        {banner && <img src={banner} alt="" />}
        
        {avatar && <Avatar className="sidebar__avatar" src={avatar}/>}
        <h2> {name} </h2>
        <h4> {email} </h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">          
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.561</p>
        </div>
        <div className="sidebar__stat">          
          <p>Views on post</p>
          <p className="sidebar__statNumber">2.765</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("SvelteJS")}
        {recentItem("DJango")}
        {recentItem("MongoDB")}
        {recentItem("Illustrator")}
      </div>
    </div>
  );
}

export default Sitebar