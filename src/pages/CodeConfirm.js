import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";

export default function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>

      <Link exact to ='/get_username' className={style.backBtn}>
        <img src="/images/back.png" alt="" />
      </Link>

      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just tested you.
        </h1>
        <input type="text" style={{width: "100%", borderColor: " #2fa8e9", textAlign: "center", outline: "none"}} />
        <p className="mt-2">
          Didn't received it? <span>Tap to resend</span>
        </p>
      </div>

     <Link exact to="/allow_notification" className="primaryBtn d-flex align-items-center" style={{ padding: "7px" }}>Next
            <img src="/images/next.png" alt="" style={{ width: "22px" }}/>
     </Link>

    </div>
  );
}
