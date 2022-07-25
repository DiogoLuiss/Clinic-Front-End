import React, { useEffect, useState } from 'react'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import { Container, ContainerItens, DivContent, DivInfoCar, P } from './styled'

function CartPatients() {
  const { FilterPatients } = useCart()

  const [Patients, setPatients] = useState([])

  useEffect(() => {
    async function loadCars() {
      const { data } = await api.get('patients')

      setPatients(data)
    }

    loadCars()
  }, [])

  const FindPatients = Patients.filter(
    (patient) =>
      patient.name.startsWith(FilterPatients) ||
      patient.tel.startsWith(FilterPatients) ||
      patient.id === FilterPatients
  )

  return (
    <Container>
      {FindPatients.map((Patients) => (
        <ContainerItens key={Patients.id}>
          <DivContent>
            <DivInfoCar>
              <P>Id: {Patients.id}</P>
              <P>Nome: {Patients.name}</P>
              <P>Telefone: {Patients.tel}</P>
            </DivInfoCar>
          </DivContent>
        </ContainerItens>
      ))}
    </Container>
  )
}
export default CartPatients
