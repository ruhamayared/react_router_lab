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
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.8;
  border-radius: 3%;
  padding: 7px;

  &:hover {
    border: 6px solid black;
  }
`
