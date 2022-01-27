import styled from "styled-components"
import React, { useState } from "react";
import EditComment from './EditComment'

function Comments({comment, myUser, onEditComment, post, onCommentDelete}){

    const [isEditing, setIsEditing] = useState(false);

    const isUser= myUser.user_id === comment.user.id

    function handleDeleteClick(){
        fetch(`http://localhost:9292/posts/comments/${comment.id}`,{
            method: "DELETE",
        })
        onCommentDelete(post, comment.id)
    }

    return(
        <StyledComment>
            <h5>{comment.user.name}</h5>
            { isEditing ?
                <EditComment comment={comment} onEditComment={onEditComment} post={post} isEditing={isEditing} setIsEditing={setIsEditing}/>
            : comment.content} 
            { isUser?
            <>
            <button onClick={()=>setIsEditing((isEditing)=>!isEditing)}> ✏️
            </button> 
            <button onClick ={handleDeleteClick}>❌</button>
            </>
            : null}
        </StyledComment>
    )
}

export default Comments

const StyledComment = styled.div`
display:flex;
justify-content: left;
padding: 0.3rem;
h5{
    margin-right: 1rem;
}

button{
    border: none;
    background-color:white;
}

`