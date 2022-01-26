import React, { useState } from "react";

function EditComment({comment, onEditComment, post}){

    const[edit, setEdit]=useState(comment.content)

    function handleEditSubmit(event){
    event.preventDefault()

    const editedComment = {
        id: comment.id,
        content: edit,
        user_id: comment.user_id,
        post_id: comment.post_id
      }

    fetch(`http://localhost:9292/posts/comments/${comment.id}`, {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedComment),
        })
        .then((r) => r.json())
        .then((editedComment) => onEditComment(post, editedComment));
        setEdit("")
    }

    

    return(
        <form onSubmit={handleEditSubmit}>
            <input
            type="text"
            value={edit}
            onChange={(e)=>setEdit(e.target.value)}
            />
            <input type="submit" value="Save"/>
        </form>
    )
}

export default EditComment