import styled from 'styled-components';
import Avatar from  '@material-ui/core/Avatar';

function Post(){
    return(
        <PostStyled>
            {/* header contains username and user photo*/ }
            <AvatarStyled>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/><h2>Username</h2>
            </AvatarStyled>
            {/* image*/ }
            <ImageStyled>
            <img src="https://www.wallpaperup.com/uploads/wallpapers/2017/07/04/1093683/7971915503d97ee82cb6db1e2ca7fec6-1000.jpg" alt="photo"/>
            </ImageStyled>
            {/* image description*/ }
            <DescriptionStyled>
            <h3>Username </h3>
            <p>Trip to Dolomites</p>
            </DescriptionStyled>
        </PostStyled>
    )
}

export default Post;

const PostStyled = styled.div`
max-width: 700px;
background-color: white;
border: 1px solid lightgray;
margin-botton: 30px;
`

const ImageStyled = styled.div`
img{
    width: 100%;
    object-fit: contain;
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