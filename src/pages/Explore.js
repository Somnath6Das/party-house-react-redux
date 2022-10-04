import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";

export default function Explore() {
  const { people, conversation } = data;

  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        {/* <Subheader/> */}
      </div>
      <h6>People to follow</h6>
      <div className={style.peopleContainer}>
        {people.map((item) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/images/avt4.png" alt="" />
              <div className="ml-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
            
          </div>
        ))}
        <button className={style.showMore}>
          Show more people{" "}
          <span>
            <DownOutlined />
          </span>
        </button>
      </div>
      <h6>Find Conversations About ...</h6>
            <div className="row mx-0">
              {conversation.map((item) => (
                <div className="col-6 px-2 mb-3">
                  <div className={style.conversationCard}>
                    <h6>
                      <FireOutlined/>
                     <span>{item.title}</span> 
                     
                    </h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
    </div>
  );
}
