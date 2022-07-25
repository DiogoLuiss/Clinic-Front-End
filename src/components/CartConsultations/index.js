import React, { useEffect, useState } from 'react'
import { FaTrash, FaPenSquare } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import {
  Container,
  ContainerItens,
  DivIcons,
  DivContent,
  DivInfoCar,
  P
} from './styled'

function CartConsultations() {
  const { push } = useHistory()
  const { FilterConsultations } = useCart()

  const [Patients, setPatients] = useState([])

  const deleteConsultations = (consultationId) => {
    async function loadCars() {
      await toast.promise(api.delete(`/consultation/${consultationId}`), {
        pending: 'excluindo carro..',
        success: 'Carro excluido com sucesso',
        error: 'Erro ao excluir carro, tente novamente'
      })
      const { data } = await api.get('consultation')
      setPatients(data)
    }

    loadCars()
  }

  function editConsultations(Consultations) {
    push('edit-consultations', { Consultations })
  }

  useEffect(() => {
    async function loadCars() {
      const { data } = await api.get('consultation')

      setPatients(data)
    }

    loadCars()
  }, [])

  const FindConsultations = Patients.filter(
    (patient) =>
      patient.date.startsWith(FilterConsultations) ||
      patient.patient.name.startsWith(FilterConsultations) ||
      patient.patient.tel.startsWith(FilterConsultations)
  )

  return (
    <Container>
      {FindConsultations.map((Consultations) => (
        <ContainerItens key={Consultations.id}>
          <DivContent>
            <DivIcons>
              <button>
                <FaTrash
                  onClick={() => deleteConsultations(Consultations.id)}
                  size={40}
                ></FaTrash>
              </button>
              <button>
                <FaPenSquare
                  size={40}
                  onClick={() => editConsultations(Consultations)}
                ></FaPenSquare>
              </button>
            </DivIcons>
            <DivInfoCar>
              <P>Id do paciente: {Consultations.patient_id}</P>
              <P>Data: {Consultations.date}</P>
              <P>Horario: {Consultations.time}h</P>
              <P>Paciente: {Consultations.patient.name}</P>
              <P>Telefone: {Consultations.patient.tel}</P>
            </DivInfoCar>
          </DivContent>
        </ContainerItens>
      ))}
    </Container>
  )
}
export default CartConsultations
