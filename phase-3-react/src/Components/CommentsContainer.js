import Comments from "./Comments";
import AddComment from './AddComment';
import styled from "styled-components";



function CommentsContainer({post, updatePosts, myUser}){

    return(
        <div>
        <StyledContainer>
          {post.comments.map((comment)=>{
                 return(
                     <Comments key={comment.id} comment={comment} myUser={myUser} updatePosts={updatePosts} post={post} />
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