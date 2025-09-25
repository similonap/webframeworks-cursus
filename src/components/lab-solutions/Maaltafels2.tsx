import React from 'react'
import styles from './Maaltafels2.module.css'

const MultiplicationRow = ({factor, max} : { factor : number, max: number}) => {
  let numbers = Array.from({length: max}, (_, i) => i+1)

  return (
    <tr>
      <td>{factor}</td>
      {
        numbers.map((number) => (
          <td>{number * factor}</td>
        )) 
      }
    </tr>
  )
}

const Header = ({max} : {max : number}) => {
  let numbers = Array.from({length: max}, (_, i) => i+1)

  return (
    <tr>
        <td>

        </td>
        {
          numbers.map((number) => (<td>{number}</td>))
        }
      </tr>
  )
}

const MultiplicationTable = ({max} : {max:number}) => {
  let numbers = Array.from({length: max}, (_, i) => i+1)

  return (
    <table>
      <Header max={max}/>
      {
        numbers.map(number => <MultiplicationRow factor={number} max={max}/>)
      }
    </table>
  )
}


const App = () => {
  return (
    <div>
        <MultiplicationTable max={5}/>
        <MultiplicationTable max={7}/>
        <MultiplicationTable max={10}/>
    </div>
  )
}
export default App
