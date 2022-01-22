import styled from "styled-components"

function Comments({comment}){
    return(
        <StyledComment>
            <h5>{comment.user.name}</h5>
            {comment.content}
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