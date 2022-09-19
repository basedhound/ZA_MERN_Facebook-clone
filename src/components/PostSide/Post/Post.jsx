import React from "react";
import "./Post.css";
// Get data from " Posts " component
import Comment from "../../../img/comment.png";
import Share from "../../../img/share.png";
import Heart from "../../../img/like.png";
import NotLike from "../../../img/notlike.png";

const Post = ({ data }) => {
   return (
      <div className="Post">
         <img src={data.img} alt="" />

         <div className="PostReactions">
            <img
               src={data.liked ? Heart : NotLike}
               alt=""
               className="PostIcon"
            />
            <img src={Comment} alt="" className="PostIcon" />
            <img src={Share} alt="" className="PostIcon" />
         </div>

         <span>{data.likes} likes</span>

         <div className="PostDetails">
            <span>
               <b>{data.name} </b>
            </span>
            <span>{data.desc}</span>
         </div>
      </div>
   );
};

export default Post;
