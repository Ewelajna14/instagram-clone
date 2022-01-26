import styled from 'styled-components';
import Post from './Post'
import React, {useState, useEffect} from 'react' 

function PostContainer({myUser}){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/posts")
        .then(r=>r.json())
        .then(posts=>setPosts(posts))
    },[])

    function updatePosts(post, comment){
        console.log(comment)
      const postIndex = posts.findIndex((p)=>post.id === p.id)
      const oldPost = posts.find((p)=>post.id === p.id)
      const newPost = {...oldPost}
      newPost.comments = [...newPost.comments, comment]
      const firstHalf = posts.slice(0,postIndex)
      const SecondHalf = posts.slice(postIndex +1)
      setPosts([...firstHalf, newPost, ...SecondHalf])
    }

    function editComment(post, editedCommentObj){
        console.log(editedCommentObj)
        console.log(post)
        const newComments = post.comments.map((comment)=>{
            if (comment.id === editedCommentObj.id){
                return editedCommentObj
            }
            else {
                return comment
            }
        })
        const oldPost = posts.find((p)=>post.id === p.id)
        const newPost = {...oldPost}
        newPost.comments = newComments
        console.log(newPost)
        const postIndex = posts.findIndex((p)=>post.id === p.id)
        const firstHalf = posts.slice(0,postIndex)
        const SecondHalf = posts.slice(postIndex +1)
        setPosts([...firstHalf, newPost, ...SecondHalf])
    }


    let displayPosts = posts.map((post)=>{
        return(
        <Post key={post.id} post={post} updatePosts={updatePosts} myUser={myUser} onEditComment={editComment}/>
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