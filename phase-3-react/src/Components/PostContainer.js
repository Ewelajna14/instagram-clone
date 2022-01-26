import styled from 'styled-components';
import Post from './Post'
import React, {useState, useEffect} from 'react' 

function PostContainer(){
    const [posts, setPosts] = useState([])

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
      console.log(oldPost)
      console.log(newPost)
      const firstHalf = posts.slice(0,postIndex)
      const SecondHalf = posts.slice(postIndex +1)
      setPosts([...firstHalf, newPost, ...SecondHalf])
    }


    let displayPosts = posts.map((post)=>{
        return(
        <Post key={post.id} post={post} updatePosts={updatePosts}/>
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