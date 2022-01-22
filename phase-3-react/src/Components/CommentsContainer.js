import Comments from "./Comments"
import styled from "styled-components"


function CommentsContainer({post}){
    return(
        <StyledContainer>
          {post.comments.map((comment)=>{
                 return(
                     <Comments comment={comment}/>
                 )
             })}
        </StyledContainer>
    )
}

export default CommentsContainer

const StyledContainer = styled.div`
padding:20px;
`