import styled from 'styled-components'

export const DivMaster = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;

  gap: 200px;
`

export const DivItens = styled.div`
  width: 500px;
  height: 500px;
  background-color: #f0f2f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  padding: 0px 1px;
  overflow: auto;

  @media (max-width: 550px) {
    width: 95%;
    height: 600px;
  }
`

export const Divsearch = styled.div`
  margin-top: 20px;
  display: flex;
  width: 70%;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 30px;
  button {
    background: none;
    color: black;
    border: none;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  input {
    background-color: #e8f0fe;
    width: 100%;
    height: 40px;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    outline: none;
    padding-left: 10px;
    border: 1px solid #dddfe2;
  }
`
