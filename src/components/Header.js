import React, {useState} from "react";
import CommentBar from "./CommentBar";

function Header ({ title, views, createdAt, comments, handleClick }) {
    
    const[upCount, setUpCount] = useState(0)
    const[downCount, setDownCount] = useState(0)
    const[showResults, setShowResults] = useState(false)
    
function handleUpVote() {
    setUpCount((UpCount) => UpCount + 1)
}
function handleDownVote() {
    setDownCount((downCount) => downCount - 1)
}

    const [isClicked, setClicked] = useState(true)

function handleClick() {
    
}

const commentList = comments.map((comment) => <CommentBar 
    key={comment.id}
    id={comment.id}
    user={comment.user}
    comment={comment.comment}
    />)



    return(
        <div className="Heading">
            <h2>{ title } </h2>
            <p>{ views } Views | Uploaded { createdAt }</p>
            <button onClick= { handleUpVote } className="upVote">{upCount}👍</button>
            <button onClick= { handleDownVote } className="downVote">{downCount}👎</button>
        <div>
            {isClicked ? (
                 <button onClick= { handleClick } className="hide-comments">Hide Comments</button>
            ):(
                <button onClick= { handleClick } className="show-commments">Show Comments</button>
            )}
        </div>
         {commentList}
        </div>
       
    )

}

export default Header;