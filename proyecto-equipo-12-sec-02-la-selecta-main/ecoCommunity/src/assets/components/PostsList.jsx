import React from "react";
import { useState, useEffect } from "react";
import PostInteractions from "./modals/PostInteractions";
import Publicacion from "./Publicacion";

const PostList = ({posts}) => {

    return(
        <div className="h-auto min-w-full bg-maincolor ">
            {posts.map((element) => (
                      <Publicacion element = {element} key = {element._id}/>                    
                  ))}    

                  
        </div>
    );
}

export default PostList;