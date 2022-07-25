import styled from 'styled-components'

export const ContainerButton = styled.button`
  height: 40px;
  width: 80%;
  background-color: #166fe5;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  transition: 1s;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 75%;
  }
  &:active {
    opacity: 0.6;
  }
  @media (max-width: 450px) {
    height: 50px;
  }
`
