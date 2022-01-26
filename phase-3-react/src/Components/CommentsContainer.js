import Comments from "./Comments";
import AddComment from './AddComment';
import styled from "styled-components";



function CommentsContainer({post, updatePosts}){

    return(
        <div>
        <StyledContainer>
          {post.comments.map((comment)=>{
                 return(
                     <Comments key={comment.id} comment={comment} />
                 )
             })}
        </StyledContainer>
        <AddComment post={post} updatePosts={updatePosts}/>
        </div>
    )
}

export default CommentsContainer

const StyledContainer = styled.div`
padding:20px;
`