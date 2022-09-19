import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
   const [modalOpened, setModalOpened] = useState();

   return (
      <section className="InfoCard">
         <div className="InfoHead">
            <h2>Your Info</h2>
            <div>
               <UilPen
                  width="2rem"
                  height="1.2rem"
                  onClick={() => setModalOpened(true)}
               />
               <ProfileModal
                  modalOpened={modalOpened}
                  setModalOpened={setModalOpened}
               />
            </div>
         </div>

         <div className="Info">
            <span>
               <b>Status </b>
            </span>
            <span>in a Relationship</span>
         </div>

         <div className="Info">
            <span>
               <b>Lives in </b>
            </span>
            <span>Chiang Mai</span>
         </div>

         <div className="Info">
            <span>
               <b>Works at </b>
            </span>
            <span>Entrepreneur</span>
         </div>

         <button className="Button Btn--Logout">Logout</button>
      </section>
   );
};

export default InfoCard;
