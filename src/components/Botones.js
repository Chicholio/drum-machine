import React from 'react'
import { SoundsDB } from "../dataBase/SoundsDB"
import styled from 'styled-components'

const DivPrincipal = styled.div`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  width: 600px;
`

const DivDrumMachine = styled.p`
  background-color: gray;
  width: 250px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border: solid;
`

const Button = styled.button`
  background-color: black;
  color: white;
  width: 63px;
  height: 63px;
  margin: 10px;
`

const PCadenaTexto = styled.p`
  border: solid black;
  background-color: gray;
  color: white;
  width: 100px;
  height: 20px;
  margin-left: 70px;
`

const Botones = () => {

    const handleClick = (e) => {
        e.target.firstElementChild.play()
        let display = document.getElementById("display")
        display.textContent = e.target.name
      }
    
      const handleKeyUp = (e) => {
        let button = document.getElementById(`${e.keyCode}`)
        if (button) {
          button.firstElementChild.play()
          let display = document.getElementById("display")
          display.textContent = button.name
        }
      }
    
      document.addEventListener("keyup", handleKeyUp)

    return (
        <DivPrincipal>
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
