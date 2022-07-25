import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Button, HeaderPage } from '../../components'
import api from '../../services/api'
import {
  DivMaster,
  DivContainer,
  DivItens,
  H1,
  Form,
  Inputs,
  Pr,
  Labels
} from './styled'

export function EditConsultation() {
  const History = useHistory()

  const {
    location: {
      state: { Consultations }
    }
  } = useHistory()
  function Nav() {
    History.push('/')
  }

  const schema = yup
    .object({
      id: yup.string().required('Esse campo é obrigatório'),
      date: yup.string().required('Esse campo é obrigatório'),
      time: yup.string().required('Esse campo é obrigatório')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const date = new Date()
    const year = clientData.date.substr(0, 4)
    const month = clientData.date.substr(5, 2) - 1
    const day = clientData.date.substr(8, 2)
    const hours = clientData.time.substr(0, 2)
    const minutes = clientData.time.substr(3, 2)

    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()
    const currentHours = date.getHours()
    const currentMinutes = date.getMinutes()

    const fullDate = new Date(year, month, day, hours, minutes)
    const dateActual = new Date(
      currentYear,
      currentMonth,
      currentDay,
      currentHours,
      currentMinutes
    )

    if (
      dateActual.getTime() < fullDate.getTime() ||
      parseInt(day) === currentDay
    ) {
      if (hours <= 17 && hours >= 8) {
        await toast.promise(
          api.put(`consultation/${Consultations.id}`, {
            patient_id: clientData.id,
            date: clientData.date,
            time: clientData.time
          }),
          {
            pending: 'Verificando seus dados',
            success: 'Consulta atualizada',
            error: 'Verifique as informações'
          }
        )
        setTimeout(() => {
          Nav()
        }, 1000)
      } else {
        alert(
          'Os horarios disponiveis são das 08:00 as 17:00, e devem ser marcados com antecedência'
        )
      }
    } else {
      alert('A data da consulta não pode ser inferior a de hoje')
    }
  }

  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>
        <DivItens>
          <H1>Marcar Consulta</H1>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Labels>Id do paciente:</Labels>
              <Inputs
                defaultValue={Consultations.patient_id}
                placeholder="Digite o id"
                {...register('id', { required: true })}
                type="string"
                error={errors.id?.message}
              />
              <Pr>{errors.id?.message}</Pr>
              <Labels>data:</Labels>

              <Inputs
                {...register('date')}
                type={'date'}
                error={errors.date?.message}
                defaultValue={Consultations.date}
              />
              <Pr>{errors.date?.message}</Pr>
              <Labels>Hora:</Labels>
              <Inputs
                defaultValue={Consultations.time}
                {...register('time')}
                type={'time'}
                error={errors.time?.message}
              />
              <Pr>{errors.time?.message}</Pr>
            </div>
            <Button type="submit">Atualizar consulta</Button>
          </Form>
        </DivItens>
      </DivContainer>
    </DivMaster>
  )
}
