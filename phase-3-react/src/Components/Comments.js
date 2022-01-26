import styled from "styled-components"
import React, { useState } from "react";
import EditComment from './EditComment'

function Comments({comment, myUser, onEditComment, post}){

    const [isEditing, setIsEditing] = useState(false);

    return(
        <StyledComment>
            <h5>{comment.user.name}</h5>
            { isEditing? 
                <EditComment comment={comment} onEditComment={onEditComment} post={post}/>
            : comment.content} 
            <button onClick={()=>setIsEditing((isEditing)=>!isEditing)}> Edit
            </button> 
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

`