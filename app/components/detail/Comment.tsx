"use client"
import { Rating } from "@mui/material";
import { RxAvatar } from "react-icons/rx";
//import Avatar from "../general/Avatar"

const Comment = ({prd}:{prd:any}) => {
  //console.log(prd);
    
  return (
    <div className=" w-full border border-gray-300 md:w-1/2 p-2 rounded-lg my-3">
    {/* <Avatar image= {prd?.user?.image} /> */}
    <div className="flex items-center gap-1">
      <RxAvatar size="45"/>
      <div>
        <div>
          <div> {prd?.user?.name}</div>
          <Rating name="read-only" value={prd?.user?.rating} readOnly />
        </div>
      </div>
  
    </div>
        <div className="text-brand-bg">
        {prd.comment}
      </div>
    </div>
  );
};

export default Comment;