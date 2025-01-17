import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../../Data/FollowersData";

const FollowersCard = () => {
   return (
      <div className="FollowersCard">
         <h3>Who is following you</h3>
         {Followers.map((follower, id) => {
            return (
               <div className="Follower" key={id}>
                  <div>
                     <img src={follower.img} alt="" className="FollowerImg" />
                     <div className="FollowerName">
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                     </div>
                  </div>
                  <button className="Button Btn--Follow">
                     Follow
                  </button>
               </div>
            );
         })}
      </div>
   );
};

export default FollowersCard;
