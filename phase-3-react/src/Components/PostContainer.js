import styled from 'styled-components';
import Post from './Post'
import React, {useState, useEffect} from 'react' 

function PostContainer(){
    const [posts, setPosts] = useState([])

    const myUser = {user_id: 160,
                   name: "Kate"
                   }

    useEffect(()=>{
        fetch("http://localhost:9292/posts")
        .then(r=>r.json())
        .then(posts=>setPosts(posts))
    },[])

    //function to create, update and delete comment
    function updatePosts(post, comment, edit = false, destroy=false){
      const postIndex = posts.findIndex((p)=>post.id === p.id)
      const oldPost = posts.find((p)=>post.id === p.id)
      const newPost = {...oldPost}
      if (!edit && !destroy ){
        newPost.comments = [...newPost.comments, comment]} //add new comment
     else if (edit && !destroy) {
        const newComments = post.comments.map((com)=>{ //update comment
            if (com.id === comment.id){
                return comment
            }
            else {
                return com
            }
        })
        newPost.comments= newComments
     }
     else if (!edit && destroy) { //delete comment
        const updatedComments= post.comments.filter((com)=>com.id !== comment) 
        newPost.comments = updatedComments
    }
      const firstHalf = posts.slice(0,postIndex)
      const SecondHalf = posts.slice(postIndex +1)
      setPosts([...firstHalf, newPost, ...SecondHalf])
    }
    //end 



    let displayPosts = posts.map((post)=>{
        return(
        <Post key={post.id} post={post} updatePosts={updatePosts} myUser={myUser}/>
        )
    })


    return(
        <StyledContainer>
            {displayPosts}
        </StyledContainer>

    )
}

export default PostContainer;

const StyledContainer = styled.div`
padding: 20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`