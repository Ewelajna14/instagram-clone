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

    function updatePosts(post, comment){
      const postIndex = posts.findIndex((p)=>post.id === p.id)
      const oldPost = posts.find((p)=>post.id === p.id)
      const newPost = {...oldPost}
      newPost.comments = [...newPost.comments, comment]
      const firstHalf = posts.slice(0,postIndex)
      const SecondHalf = posts.slice(postIndex +1)
      setPosts([...firstHalf, newPost, ...SecondHalf])
    }


    function editComment(post, editedCommentObj){
        const newComments = post.comments.map((comment)=>{
            if (comment.id === editedCommentObj.id){
                return editedCommentObj
            }
            else {
                return comment
            }
        })

        const editedPost = {...post}
        editedPost.comments = newComments
        const postIndex = posts.findIndex((p)=>post.id === p.id)
        const firstHalf = posts.slice(0,postIndex)
        const SecondHalf = posts.slice(postIndex +1)
        setPosts([...firstHalf, editedPost, ...SecondHalf])
    }

    function hanleCommentDelete(post, deletedComment){
    const updatedComments= post.comments.filter((comment)=>comment.id !== deletedComment)
    const editedPost ={...post}
    editedPost.comments = updatedComments
    const postIndex = posts.findIndex((p)=>post.id === p.id)
    const firstHalf = posts.slice(0,postIndex)
    const SecondHalf = posts.slice(postIndex +1)
    setPosts([...firstHalf, editedPost, ...SecondHalf])
    }


    let displayPosts = posts.map((post)=>{
        return(
        <Post key={post.id} post={post} updatePosts={updatePosts} myUser={myUser} onEditComment={editComment} onCommentDelete={hanleCommentDelete}/>
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