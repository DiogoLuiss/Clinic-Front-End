import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f0f2f5;
  width: 99.978%;
  height: 72px;
  display: flex;
  justify-content: space-between;
`

export const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 100px;
  gap: 10px;
  @media (max-width: 950px) {
    padding: 0px 10px;
  }
  button {
    @media (max-width: 850px) {
      font-size: 14px;
      padding: 0px 0px;
    }
  }
  @media (max-width: 550px) {
    padding-right: 10px;
  }
`

export const ButtonConsultation = styled.button`
  border: none;
  background: none;
  font-weight: 900;
  font-size: 20px;
  color: ${(props) =>
    (props.isActive ? ' red' : 'black') ||
    (props.isActive2 ? ' red' : 'black')};

  cursor: pointer;
  &:hover {
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
  @media (max-width: 400px) {
    display: none;
  }
`

export const ButtonMakeAppointment = styled.button`
  border: none;
  background: none;
  font-weight: 900;
  font-size: 20px;
  ${(props) => (props.isActive ? 'color: red' : 'color:black')};
  cursor: pointer;
  &:hover {
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
  @media (max-width: 400px) {
    display: none;
  }
`

export const ButtonPatients = styled.button`
  border: none;
  background: none;
  font-weight: 900;
  font-size: 20px;
  ${(props) => (props.isActive ? 'color: red' : 'color:black')};
  cursor: pointer;
  &:hover {
    color: red;
  }
  &:active {
    opacity: 0.8;
  }
  @media (max-width: 400px) {
    display: none;
  }
`

export const DivProfile = styled.div`
  margin-left: 5%;
  width: 20%;
  display: flex;
  flex-direction: row;
  margin-right: 5%;
  gap: 10px;
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    padding: 0px 0px;
  }
  @media (max-width: 550px) {
    width: 30%;
  }
`
export const DivProfileIcon = styled.div`
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;

  p {
    color: purple;
    text-align: end;
  }
`

export const DivProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  p {
    color: black;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    margin-left: 15px;
    margin-bottom: 3px;
  }
  button {
    font-weight: 900;
    font-size: 15px;
    line-height: 16px;
    background: none;
    border: none;
    width: 0%;
    margin-left: 15px;
    color: purple;
    font-weight: 900;
    cursor: pointer;

    &:hover {
      color: red;
    }
    &:active {
      opacity: 0.8;
    }
  }
`

export const UlNav = styled.ul`
  position: relative;

  display: none;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    color: purple;

    transition: 2s;
    margin: 10px 0px auto auto;
  }
`

export const LiNav = styled.li`
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  width: 120px;
  margin-top: 5px;
  @media (max-width: 550px) {
    color: black;
    ${(LiNav) =>
      LiNav.IsBack
        ? 'transition-duration: 1s;   Color: black;font-weight: 800;  '
        : ' font-size: 0px;'}
  }
`
