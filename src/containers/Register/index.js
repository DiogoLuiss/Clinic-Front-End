import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Button } from '../../components'
import api from '../../services/api'
import {
  DivMaster,
  DivItens,
  H1,
  Form,
  Inputs,
  Pr,
  Labels,
  P,
  A
} from './Styled'

export function Register() {
  const History = useHistory()

  function Nav() {
    History.push('login')
  }

  const schema = yup
    .object({
      name: yup.string().required('Esse campo é obrigatório'),
      email: yup
        .string()
        .required('Esse campo é obrigatório')
        .email('Email inválido'),
      password: yup
        .string()
        .required('Esse campo é obrigatório')
        .min(8, 'A senha deve conter no minimo 8 caracteres'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'A senha deve ser igual')
        .required('Esse campo é obrigatório')
    })
    .required()

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 409) {
        toast.error('Esse email ja está registrado', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else if (status === 200 || status === 201) {
        toast.success('Cadastrado com sucesso', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Faha no sitema! tente novamente', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    setTimeout(() => {
      Nav()
    }, 1000)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  console.log(errors.name)

  return (
    <DivMaster>
      <DivItens>
        <H1>Cadastro de funcionário</H1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Labels>Nome:</Labels>
          <Inputs
            placeholder="Digite seu nome"
            {...register('name', { required: true })}
            type="text"
            error={errors.name?.message}
          />
          <Pr>{errors.name?.message}</Pr>

          <Labels>Email:</Labels>
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
            {...register('password', { required: true })}
            type="password"
            error={errors.password?.message}
          />
          <Pr>{errors.password?.message}</Pr>

          <Labels>Confirme a Senha:</Labels>
          <Inputs
            placeholder="Confirmar senha"
            {...register('confirmPassword', { required: true, minLength: 8 })}
            type={'password'}
            error={errors.confirmPassword?.message}
          />
          <Pr style={{ marginBottom: 20 }}>
            {errors.confirmPassword?.message}
          </Pr>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <P>
          Ja possui conta?{' '}
          <A onClick={Nav} to={'/login'}>
            Login
          </A>
        </P>
      </DivItens>
    </DivMaster>
  )
}
