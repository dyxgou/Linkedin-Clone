import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import "../CSS/Header.css"
import HeaderOptions from './HeaderOptions'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { BusinessCenterSharp } from '@material-ui/icons'
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"


function Header() {
  return (
    <div className="header">      
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linkedin_icon" />
        <div className="header__search">
          {/* Search Icon */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterSharp} title="Jobs"/> 
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions avatar="https://images-ext-1.discordapp.net/external/znrbPMZaVsJMlqgAOohRHrnHSSRk8fcvi5a0OBRYkd0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/852671849145172009/28ea70b271628f1492d2f672d7bc2afb.webp" title="Me" />
      </div>
    </div>
  )
}

export default Header
