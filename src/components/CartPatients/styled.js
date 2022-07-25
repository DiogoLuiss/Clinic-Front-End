import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px 5px;
  margin-top: 50px;
  width: 90%;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 550px) {
    grid-template-columns: 80%;
  }
`

export const ContainerItens = styled.div`
  max-height: 220px;
  padding: 3px 5px;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  display: grid;
  overflow: hidden;
`

export const DivContent = styled.div`
  display: flex;
  align-items: center;
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
