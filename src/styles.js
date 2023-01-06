import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
`
export const Card = styled.div`
  width: 20%;
  min-width: 200px;
  border: 3px solid black;
  margin: 40px auto;
  transition: border 0.3s;

  &:hover {
    border: 6px solid black;
  }
`
