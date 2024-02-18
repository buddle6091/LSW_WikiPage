import styled from "@emotion/styled"

export const MainWrapper = styled.main`
margin: 10rem auto 0;
width: 100%;
height: auto;
max-width: 60rem;
height: auto;

position: relative;
display: flex;
flex-direction: column;
`

export const AddContainer = styled.section`
width: 100%;
height: auto;

display: flex;
justify-content: space-between;

span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #111111;
}

button {
    width: 5rem;
    height: auto;
    padding: 0.5rem;
    text-align: center;

    border-radius: 1rem;

    color: #ffffff;
    background-color: #111111;
}
`

export const ListContainer = styled.section`
  margin: 1rem auto 1.5rem;
  width: 100%;
  max-width: 67.5rem;

  position: relative;
`;

export const ListTable = styled.table`
  width: 100%;
  margin: 0 auto;
  height: auto;

  word-break: keep-all;
  border-collapse: collapse;
  position: relative;

  thead {
    height: 3.1875rem;
  }

  th {
    color: #111111;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.375rem;
    letter-spacing: -0.00875rem;
    border-top: 2px solid #111111;
    border-bottom: 1px solid #111111;

    position: relative;
    text-align: center;
    &.wikiNumber {
      width: 4.75rem;
    }
    &.wikiName {
      width: auto;
      padding-left: 1.2rem;

      text-align: left;
    }
  }

  td {
    height: 3.75rem;

    text-align: center;
    align-items: center;
    border-bottom: 1px solid #d6d8e1;
    word-break: break-word;
    &.wikiNumber {
      width: 4.75rem;
    }
    &.wikiName {
      width: auto;
      padding-left: 1.2rem;

      text-align: left;
      cursor: pointer;
    }
  }
`;

export const PagenationContainer = styled.nav`
width: 100%;
margin-top: 1rem;
padding-top: 1rem;

border-top: 2px solid #111111;
position: relative;
justify-content: center;

display: inline-flex;
gap: 0.3rem;
`

export const PagenateButton = styled.button`
width: 1.4rem;
height: 1.4rem;
padding: 0.2rem;

align-items: center;
justify-content: center;

border-radius: 50%;
background-color: #111111;
color: #ffffff;
font-size: 1rem;

display: flex;
`


