import React,{ useState } from "react";
import Header from "../components/Header";
import DailyInfoCard from "../components/DailyInfoCard";
import style from "../style/home.module.css";
import RoomInfoCard from "../components/RoomInfoCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json"
import BottomSheet from "../components/BottomSheet";
import newRoomData from "../data/NewRoom.json"


export default function Home() {
    const [sheetVisible, setSheetVisible] = useState(false);
    const [itemsVisible, setItemVisible] = useState(true);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setloaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

  return (
    <>
    {loaderVisibility ? (
      <div style={{
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <img src="/images/loader.gif" alt="" />
      </div>
    ) : ("")}
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2" />Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet
      sheetTitle='start room'
      setSheetVisible={(item) => setSheetVisible(item)}
      sheetVisible={sheetVisible}
      cardDetail={data.find((item) => item.id === cardId)}
      setItemVisible={(item) =>setItemVisible(item)}
      setSheetCreateRoom={(item) => {
        setloaderVisibility(true);
        setTimeout(() =>{
          setSheetCreateRoom(item);
          setloaderVisibility(false);
        }, 1500)
      }}
      />
      <BottomSheet sheetTitle="new room"
      setSheetVisible={(item) => setSheetCreateRoom(item)}
      sheetVisible={sheetCreateRoom}
      cardDetail={newRoomData}
      setItemVisible={(item) => setItemVisible(item)}
      />
    </>
  );
}

// import variables for js pages must have start with capital letter.
