import Comments from "./Comments";
import AddComment from './AddComment';
import styled from "styled-components";
import React, {useState, useEffect} from 'react' 



function CommentsContainer({post, updatePosts, myUser, onEditComment }){

    return(
        <div>
        <StyledContainer>
          {post.comments.map((comment)=>{
                 return(
                     <Comments key={comment.id} comment={comment} myUser={myUser} onEditComment={onEditComment} post={post}/>
                 )
             })}
        </StyledContainer>
        <AddComment post={post} updatePosts={updatePosts} myUser={myUser}/>
        </div>
    )
}

export default CommentsContainer

const StyledContainer = styled.div`
padding:20px;
`