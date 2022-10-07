import React from "react";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsUpload } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

export default function Profile(props) {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={style.header}>
          <div className={`${exploreStyle.head} text-right mb-0 `}>
            <Link to="/home">
              <img
                src="/images/back.png"
                alt=""
                className={exploreStyle.arrow_icon}
              />
            </Link>
          </div>
          <div className={style.actionBtn}>
            <BsAt />
            <BsUpload />
            <AiOutlineSetting />
          </div>
        </div>
        <img src="/images/avt5.png" alt="" className={style.profile_image} />
        <h4>Somnath Das</h4>
        <p>@Coder</p>
      </div>
    </>
  );
}
