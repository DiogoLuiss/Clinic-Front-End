import React from 'react'

import { HeaderPage } from '../../components'
import CartPatients from '../../components/CartPatients'
import { useCart } from '../../hooks/CartContext'
import { DivMaster, DivContainer, DivItens, Divsearch } from './styled'

export function Patients() {
  const { setFilterPatients } = useCart()

  return (
    <DivMaster>
      <DivContainer>
        <HeaderPage></HeaderPage>

        <DivItens>
          <Divsearch>
            <input
              placeholder="Buscar"
              onChange={(ev) => setFilterPatients(ev.target.value)}
            ></input>
          </Divsearch>
          <CartPatients></CartPatients>
        </DivItens>
      </DivContainer>
    </DivMaster>
  )
}
