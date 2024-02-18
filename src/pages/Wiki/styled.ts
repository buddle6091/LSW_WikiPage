import styled from "@emotion/styled"

export const WikiWrapper = styled.main`
margin: 10rem auto 0;
width: 100%;
height: auto;
max-width: 60rem;
height: auto;

position: relative;
display: flex;
flex-direction: column;
`

export const TitleContainer = styled.section`
width: 100%;
height: auto;
padding: 1rem 0;

text-align: left;
align-items: center;
border-bottom: 1px solid #111111;

position: relative;
`

export const ContentContainer = styled.section`
width: 100%;
height: auto;

padding : 1rem 0;
`

export const EditContainer = styled.section`
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