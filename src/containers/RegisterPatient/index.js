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

export function RegisterPatient() {
  const History = useHistory()

  function Nav() {
    History.push('/patients')
  }

  const schema = yup
    .object({
      name: yup.string().required('Esse campo é obrigatório'),
      tel: yup.string('apenas numero').required('Esse campo é obrigatório')
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
    await toast.promise(
      api.post('patients', {
        name: clientData.name,
        tel: clientData.tel
      }),

      {
        pending: 'Verificando seus dados',
        success: 'Paciente registrado',
        error: 'Verifique as informações'
      }
    )

    Nav()
    setTimeout(() => {
      Nav()
    }, 1000)
  }

  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>
        <DivItens>
          <H1>Registro de paciente</H1>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Labels>Nome do paciente:</Labels>
              <Inputs
                placeholder="Digite o nome do paciente"
                {...register('name', { required: true })}
                type="string"
                error={errors.name?.message}
              />
              <Pr>{errors.name?.message}</Pr>
              <Labels>Telefone:</Labels>
              <Inputs
                placeholder="Digite o telefone"
                {...register('tel', { required: true, minLength: 8 })}
                type={'tel'}
                error={errors.tel?.message}
              />
              <Pr>{errors.tel?.message}</Pr>
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </DivItens>
      </DivContainer>
    </DivMaster>
  )
}
