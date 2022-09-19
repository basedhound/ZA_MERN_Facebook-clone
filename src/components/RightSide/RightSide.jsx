import React, { useState } from "react";
import "./RightSide.css";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCard/TrendCard";
import ShareModal from "./ShareModal/ShareModal";

const RightSide = () => {
   const [modalOpened, setModalOpened] = useState();
   return (
      <section className="RightSide">
         <div className="NavIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
         </div>
         <TrendCard />
         <button
            className="Button Btn--Right"
            onClick={() => setModalOpened(true)}>
            Share
         </button>
         <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
         />
      </section>
   );
};

export default RightSide;
