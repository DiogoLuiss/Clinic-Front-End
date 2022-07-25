import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px 5px;
  margin-top: 50px;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (max-width: 550px) {
    width: 95%;
  }
`

export const ContainerItens = styled.div`
  max-height: 220px;
  padding: 3px 5px;
  background-color: white;
  border-radius: 20px;
  width: 80%;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 550px) {
    width: 95%;
  }
`

export const DivIcons = styled.div`
  display: flex;
  width: 70%;
  align-self: flex-end;
  justify-content: end;
  gap: 20px;
  height: 40px;
  border-radius: 20px 20px 0px 0px;
  padding-top: 10px;
  padding-right: 15px;
  margin-bottom: 10px;
  button {
    border: none;

    :hover {
      color: red;
      cursor: pointer;
    }
  }
`

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DivInfoCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-bottom: 10px;
`

export const P = styled.p`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 500;
  color: black;
  @media (max-width: 290px) {
    font-size: 13px;
  }
`
