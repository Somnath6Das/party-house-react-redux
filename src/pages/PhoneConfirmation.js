import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/back.png"  alt="" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry="IN" value={value} onChange={setValue}/>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of service and Privacy policy</span> Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
        style={{ padding: "7px" }}
      >
        Next{" "}
        <img
          src="/images/next.png"
          style={{
            width: "30px",
          }}
          className="ml-1"
          alt=""
        />
      </Link>
    </div>
  );
}
