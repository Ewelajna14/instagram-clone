
import styled from "styled-components"

function AddComment(){
    return(
        <StyledForm>
         <input
         type="text"
         placeholder= "Add a comment..."
         />
         <input type="submit" value="Post"/>
        </StyledForm>
    )
}

export default AddComment

const StyledForm = styled.form`
input[type="text"] {
    width: 77%;
    padding: 10px;
    border: none;
    border-top: 1px solid lightgray;
    outline: none;
  }
  input[type="submit"] {
    width: 20%;
    padding: 10px;
    border: none;
    border-top: 1px solid lightgray;
  }

`