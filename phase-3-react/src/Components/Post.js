import styled from 'styled-components';
import Avatar from  '@material-ui/core/Avatar';

function Post({post}){
    return(
        <PostStyled>
            {/* header contains username and user photo*/ }
            <AvatarStyled>
            <Avatar alt="Remy Sharp" src={post.user.avatar}/><h2>{post.user.name}</h2>
            </AvatarStyled>
            {/* image*/ }
            <ImageStyled>
            <img src={post.image_url} alt="photo"/>
            </ImageStyled>
            {/* image description*/ }
            <DescriptionStyled>
            <h3>{post.user.name}</h3>
            <p>{post.description}</p>
            </DescriptionStyled>
        </PostStyled>
    )
}

export default Post;

const PostStyled = styled.div`
max-width: 700px;
background-color: white;
border: 1px solid lightgray;
margin-botton: 40px;
`

const ImageStyled = styled.div`
img{
    width: 100%;
    object-fit: contain;
    max-height: 600px;
}
`
const AvatarStyled = styled.div`
display: flex;
padding: 20px;
align-items: center;
h2{
    margin-left: 1rem;
}
`

const DescriptionStyled = styled.div`
display: flex;
padding: 20px;
align-items: center;
h3{
    margin-right:1rem;
}
`