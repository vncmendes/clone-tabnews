import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Dancing Script', cursive;

  :first-child {
    margin-top: 10rem;
    padding: 0rem 5rem 0rem 5rem;
  }

  img {
    width: 300px;
    height: 300px;
  }

  h2 {
    padding-top: 2rem;
    font-size: 3rem;
  }
`