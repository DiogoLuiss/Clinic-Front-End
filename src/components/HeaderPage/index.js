import React, { useEffect, useState } from 'react'
import { FaUser, FaBars } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import {
  Container,
  DivNav,
  UlNav,
  LiNav,
  ButtonConsultation,
  ButtonMakeAppointment,
  ButtonPatients,
  DivProfile,
  DivProfileIcon,
  DivProfileInfo
} from './styled'

export function HeaderPage() {
  const {
    push, // é possivel usar o push de maneira mais resumida
    location: { pathname } // dessa maneira pega a informação da page que estamos
  } = useHistory()

  const { userData } = useUser()

  async function ExitUser() {
    await localStorage.removeItem('clinic:userdata')
    push('/login')
  }

  const [Active, setActive] = useState(false)

  function Change() {
    setActive(!Active)
    console.log(Active)
  }
  useEffect(() => {}, [Active])

  return (
    <Container>
      <DivNav>
        <UlNav>
          <FaBars size={50} onClick={Change} />

          <LiNav
            IsBack={Active}
            isActive={pathname === '/'}
            isActive2={pathname === '/edit-consultations'}
            onClick={() => push('/')}
          >
            Consultas
          </LiNav>
          <LiNav
            IsBack={Active}
            onClick={() => push('/new-appointments')}
            isActive={pathname.includes('/new-appointments')}
          >
            Marcar consulta
          </LiNav>
          <LiNav
            IsBack={Active}
            isActive={pathname.includes('/patients')}
            onClick={() => push('/patients')}
          >
            {' '}
            Pacientes
          </LiNav>
          <LiNav
            IsBack={Active}
            isActive={pathname.includes('/register-patient')}
            onClick={() => push('/register-patient')}
          >
            {' '}
            Registrar paciente
          </LiNav>
        </UlNav>
        <ButtonConsultation
          isActive={pathname === '/'}
          isActive2={pathname === '/edit-consultations'}
          onClick={() => push('/')}
        >
          Consultas
        </ButtonConsultation>
        <ButtonMakeAppointment
          onClick={() => push('/new-appointments')}
          isActive={pathname.includes('/new-appointments')}
        >
          Marcar consulta
        </ButtonMakeAppointment>
        <ButtonPatients
          isActive={pathname.includes('/patients')}
          onClick={() => push('/patients')}
        >
          Pacientes
        </ButtonPatients>
        <ButtonPatients
          isActive={pathname.includes('/register-patient')}
          onClick={() => push('/register-patient')}
        >
          Registrar paciente
        </ButtonPatients>
      </DivNav>

      <DivProfile>
        <DivProfileIcon>
          <p>
            <FaUser size={30}></FaUser>
          </p>
        </DivProfileIcon>

        <DivProfileInfo>
          <p>Olá, {userData.name}</p>
          <button onClick={() => ExitUser()}>Sair</button>
        </DivProfileInfo>
      </DivProfile>
    </Container>
  )
}

// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
