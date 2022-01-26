import React, {useState} from 'react'
import styled from "styled-components"

function AddComment({ updatePosts, post}){

  const [makeComment, setMakeComment] = useState("")

  function handlecreateComment(event){
    event.preventDefault()
    const newComment = {
      content:makeComment,
      user_id: 159,
      post_id: post.id
    }

    fetch("http://localhost:9292/posts/comments", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
    .then((r)=>r.json())
    .then(newComment=> updatePosts(post, newComment))
    setMakeComment("")
  }


    return(
        <StyledForm onSubmit={handlecreateComment}>
         <input
         type="text"
         placeholder= "Add a comment..."
         value={makeComment}
         onChange={(event)=>setMakeComment(event.target.value)}
         />
         <input type="submit" value="Post"/>
        </StyledForm>
    )
}

export default AddComment

const StyledForm = styled.form`
input[type="text"] {
    width: 77%;
    padding: 10px;
    border: none;
    border-top: 1px solid lightgray;
    outline: none;
  }
  input[type="submit"] {
    width: 20%;
    padding: 10px;
    border: none;
    border-top: 1px solid lightgray;
  }

`