import React from 'react'

import { HeaderPage } from '../../components'
import CartConsultations from '../../components/CartConsultations'
import { useCart } from '../../hooks/CartContext'
import { DivMaster, DivContainer, DivItens, Divsearch } from './Styled'

export function Home() {
  const { setFilterConsultations } = useCart()

  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>

        <DivItens>
          <Divsearch>
            <input
              placeholder="Buscar"
              onChange={(ev) => setFilterConsultations(ev.target.value)}
            ></input>
          </Divsearch>
          <CartConsultations></CartConsultations>
        </DivItens>
      </DivContainer>
    </DivMaster>
  )
}
