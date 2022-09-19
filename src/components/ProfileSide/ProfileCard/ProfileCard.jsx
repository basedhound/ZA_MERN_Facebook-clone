import React from "react";
import CoverImg from "../../../img/cover.jpg";
import ProfileImg from "../../../img/profileImg.webp";
import "./ProfileCard.css";

const ProfileCard = () => {
   const ProfilePage = true;

   return (
      <div className="ProfileCard">
         <div className="ProfileImages">
            <img src={CoverImg} alt="" />
            <img src={ProfileImg} alt="" />
         </div>

         <div className="ProfileName">
            <h2>Heize</h2>
            <p>Singer, Musician</p>
         </div>

         <div className="FollowStatus">
            <div>
               <div className="Follow">
                  <span>6,890</span>
                  <span>Followings</span>
               </div>
               <div className="vertical-line"></div>
               <div className="Follow">
                  <span>6,890</span>
                  <span>Followers</span>
               </div>
               {ProfilePage && (
                  <>
                     <div className="vertical-line"></div>
                     <div className="Follow">
                        <span>3</span>
                        <span>Posts</span>
                     </div>
                  </>
               )}
            </div>
         </div>
         {ProfilePage ? "" : <span>My Profile</span>}
      </div>
   );
};

export default ProfileCard;
