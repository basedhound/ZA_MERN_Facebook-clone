import React, { useState, useRef } from "react";
import ProfileImg from "../../../img/profileImg.webp";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
   const [image, setImage] = useState(null);
   const imageRef = useRef();

   const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0];
         setImage({
            image: URL.createObjectURL(img),
         });
      }
   };

   return (
      <section className="PostShare">
         <img src={ProfileImg} alt="" />
         <div>
            <input type="text" placeholder="What's on your mind ?" />
            <div className="PostOptions">
               <div
                  className="PostOption"
                  style={{ color: "var(--photo)" }}
                  onClick={() => imageRef.current.click()}>
                  <UilScenery />
                  &nbsp;Photo
               </div>
               <div className="PostOption" style={{ color: "var(--video)" }}>
                  <UilPlayCircle />
                  &nbsp;Video
               </div>
               <div className="PostOption" style={{ color: "var(--location)" }}>
                  <UilLocationPoint />
                  &nbsp;Location
               </div>
               <div className="PostOption" style={{ color: "var(--schedule)" }}>
                  <UilSchedule />
                  &nbsp;Schedule
               </div>
               <button className="Button Btn--Share">Share</button>
               <div style={{ display: "none" }}>
                  <input
                     type="file"
                     name="myImage"
                     ref={imageRef}
                     onChange={onImageChange}
                  />
               </div>
            </div>
            {image && (
               <div className="PreviewImage">
                  <UilTimes onClick={() => setImage(null)} />
                  <img src={image.image} alt="" />
               </div>
            )}
         </div>
      </section>
   );
};

export default PostShare;
