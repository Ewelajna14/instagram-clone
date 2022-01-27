import React, { useState } from "react";
import styled from "styled-components"

function EditComment({comment, updatePosts, post, setIsEditing, isEditing}){

    const[edit, setEdit]=useState(comment.content)
   

    function handleEditSubmit(event){
    event.preventDefault()
    setIsEditing((isEditing)=>!isEditing)

    const editedComment = {
        id: comment.id,
        content: edit,
        user_id: comment.user_id,
        post_id: comment.post_id
      }

    fetch(`http://localhost:9292/posts/${post.id}/comments/${comment.id}`, {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedComment),
        })
        .then((r) => r.json())
        .then((editedComment) => updatePosts(post, editedComment, true));
        setEdit("")
    }

    

    return(
        <StyledForm onSubmit={handleEditSubmit}>
            <input
            type="text"
            value={edit}
            onChange={(e)=>setEdit(e.target.value)}
            />
            <input type="submit" value="Save"/> 
        </StyledForm>
    )
}

export default EditComment

const StyledForm = styled.form `
input[type="text"]{
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 4px;
    outline: none;
}

input[type="submit"]{
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 4px;
}
`