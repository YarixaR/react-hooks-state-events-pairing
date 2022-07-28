import React from "react";
import Header from "./Header";


function CommentBar({id, user, comment, handleClick}) {

    

    return(
        <div className="CommentSection">
                <h4>{user}</h4>
                <p>{comment}</p>
        </div>
    )
}

export default CommentBar;