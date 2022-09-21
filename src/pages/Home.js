import React,{ useState } from "react";
import Header from "../components/Header";
import DailyInfoCard from "../components/DailyInfoCard";
import style from "../style/home.module.css";
import RoomInfoCard from "../components/RoomInfoCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json"



export default function Home() {
              // 9:48:52
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button>
          <AiOutlinePlus className="mr-2" />
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
    </>
  );
}

// import variables for js pages must have start with capital letter.
