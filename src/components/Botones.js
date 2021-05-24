import React from 'react'
import { SoundsDB } from "../dataBase/SoundsDB"
import styled from 'styled-components'

const DivPrincipal = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DivDrumMachine = styled.p`
  background-color: #cd93d8;
  width: 250px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border: solid black;
`
const DivParrafoMachine = styled.p`
  background-color: gray;
  font-size: 30px;
`

const Button = styled.button`
  background-color: #572364;
  color: white;
  width: 63px;
  height: 63px;
  margin: 10px;
`

const PCadenaTexto = styled.p`
  border: solid black;
  background-color: #cd93d8;
  color: white;
  width: 100px;
  height: 20px;
`

const Botones = () => {

  const handleClick = (e) => {
    e.target.firstElementChild.play()
    let display = document.getElementById("display")
    display.textContent = e.target.name
  }
  
  document.addEventListener("keyup", (e) => {
    let button = document.getElementById(`${e.keyCode}`)
    if (button) {
      button.firstElementChild.play()
      let display = document.getElementById("display")
      display.textContent = button.name
    }
  })

  return (
    <DivPrincipal>
      <DivParrafoMachine>Drum Machine</DivParrafoMachine>
      <DivParrafoMachine>Mauricio Londoño Cianci</DivParrafoMachine>
      <DivDrumMachine id="drum-machine" >
        {
          SoundsDB.map(sounds =>
            <Button className="drum-pad" id={sounds.keyCode} name={sounds.id} key={sounds.id} onClick={handleClick}>
              {sounds.keyTrigger}
              <audio id={sounds.keyTrigger} className="clip" src={sounds.url} />
            </Button>
          )
        }
      </DivDrumMachine>
      <PCadenaTexto id="display" >Sonidos</PCadenaTexto>
    </DivPrincipal>
  )
}

export default Botones
