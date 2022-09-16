import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";

export default function Header() {
  return ( 
     <div className={style.Header}>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="" />
      </Link>
      <div className={style.nav_items}>

      <Link exact to="/friends_invite">
      <img src="/images/add-user.png" alt="" />
      </Link>
      <Link exact to="/upcoming">
      <img src="/images/calendar.png" alt="" />
      </Link>
      <Link exact to="/activity">
      <img src="/images/chat-box.png" alt="" />
      </Link>
      <Link exact to="/profile">
      <img src="/images/gamer.png" alt="" />
      </Link>
      </div>
     </div> 
  );
}
