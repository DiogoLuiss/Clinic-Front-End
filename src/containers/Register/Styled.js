import styled from 'styled-components'

export const DivMaster = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivItens = styled.div`
  width: 500px;
  height: 600px;
  background-color: #f0f2f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  padding: 0px 1px;
  @media (max-width: 400px) {
    width: 300px;
    height: 600px;
  }
`

export const H1 = styled.h1`
  color: black;
  font-size: 25px;
  margin-bottom: 30px;
`
export const Form = styled.form`
  width: 53%;
  height: 70%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 400px) {
    width: 80%;
    height: 70%;
  }
`

export const Inputs = styled.input`
  background-color: #e8f0fe;
  color: black;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 2px;
  outline: none;
  margin-top: 5px;
  padding-left: 10px;
  font-size: 15px;
  border: ${(props) => (props.error ? 'solid red' : '1px solid #dddfe2')};
`
export const Pr = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: red;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 20px;
`

export const Labels = styled.label`
  color: black;
  font-size: 15px;
  align-self: flex-start;
  margin-left: 20px;

  font-weight: 500;
`

export const P = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #1877f2;
`

export const A = styled.a`
  text-decoration: underline;
  font-size: 15px;
  margin-left: 5px;
  transition: 1s;
  &:hover {
    font-size: 16px;
    color: red;
    cursor: pointer;
  }
`
