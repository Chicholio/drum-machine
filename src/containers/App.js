import React from 'react'
import Botones from '../components/Botones'
import styled from 'styled-components'

const DivPrincipal = styled.div`
  text-align: center;
`

const App = () => {
  return (
    <DivPrincipal style={{background: 'gray'}}>
      <Botones />
    </DivPrincipal>
  )
}

export default App;