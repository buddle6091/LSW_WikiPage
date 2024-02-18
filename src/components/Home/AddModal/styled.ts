import styled from "@emotion/styled"

export const AddModalContainer = styled.section`
width: 100%;
height: auto;
padding: 1rem;

display: flex;
flex-direction: column;
gap: 1rem;
`

export const Title = styled.span`
color: #111111;
font-size: 1rem;
font-weight: 500;
`

export const Input = styled.input`
width: 100%;
height: 2rem;
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;

  align-items: center;
  display: flex;
  position: relative;

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: lightgray;
  }

  &:focus {
    outline: none;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 18.75rem;
  padding: 0.75rem 1rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.01rem;
  color: #111111;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #cccccc;

  position: relative;

  cursor: text;

   &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: lightgray;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitContainer = styled.section`
width: 100%;
margin: 1rem auto;
padding-top: 1rem;

border-top: 1px solid #111111;

justify-content: center;
align-items: center;
display: flex;

button {
    width: 5rem;
    height: auto;
    padding: 0.5rem;
    text-align: center;

    border-radius: 1rem;

    color: #ffffff;
    background-color: #111111;
    cursor: pointer;
}
`