import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  DivMaster,
  DivLogin,
  H1,
  Form,
  Inputs,
  Pr,
  Labels,
  P,
  A
} from './styled'

export function Login() {
  const { putUserData } = useUser()

  const History = useHistory()

  function NavHome(data) {
    if (data.adm === true) {
      History.push('/')
    }
  }
  function Nav() {
    History.push('/cadastro')
  }

  const schema = yup
    .object({
      email: yup
        .string()
        .required('Email é obrigatório')
        .email('Email inválido'),
      password: yup
        .string()
        .required('Senha é obrigatório')
        .min(8, 'A senha deve conter no minimo 8 caracteres')
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
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),

      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo (a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)
    NavHome(data)
    setTimeout(() => {
      NavHome()
    }, 1000)
  }

  return (
    <DivMaster>
      <DivLogin>
        <H1>Login do funcionário</H1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Labels>Login:</Labels>
            <Inputs
              placeholder="Digite seu email"
              {...register('email', { required: true })}
              type="email"
              error={errors.email?.message}
            />
            <Pr>{errors.email?.message}</Pr>
            <Labels>Senha:</Labels>
            <Inputs
              placeholder="Digite sua senha"
              {...register('password', { required: true, minLength: 8 })}
              type={'password'}
              error={errors.password?.message}
            />
            <Pr>{errors.password?.message}</Pr>
          </div>
          <Button type="submit">Entrar</Button>
        </Form>

        <P>
          Não possui conta?
          <A onClick={Nav} to="/register">
            Cadastre-se
          </A>
        </P>
      </DivLogin>
    </DivMaster>
  )
}
