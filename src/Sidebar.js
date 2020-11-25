import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEIAKl5HiYxgA/profile-displayphoto-shrink_400_400/0/1602710770947?e=1611187200&v=beta&t=jZfSkU2JHDQ9ydXE8eFdQfmfiTy2-C77M3ssWH4EOVY"></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined></SearchOutlined>
            <input placeholder="Search or start new chat" type="text"></input>

          </div>
      </div>

      <div className="sidebar__chats">
          <SidebarChat></SidebarChat>
          <SidebarChat></SidebarChat>
          <SidebarChat></SidebarChat>
      </div>
    </div>
  );
}

export default Sidebar;
