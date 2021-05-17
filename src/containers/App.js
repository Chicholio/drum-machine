import React from 'react'
import Botones from '../components/Botones'
import styled from 'styled-components'

const DivPrincipal = styled.div`
  text-align: center;
`

const App = () => {
  return (
    <DivPrincipal>
      <Botones />
    </DivPrincipal>
  )
}

export default App;