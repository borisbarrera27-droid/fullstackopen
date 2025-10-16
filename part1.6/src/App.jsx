import { useState } from 'react'

  /*
    useState es un hook de React que sirve para crear una variable de estado dentro de un componente funcional.
    En este caso, el estado inicial es 0.
    React devuelve un array con dos elementos:
    counter: el valor actual del estado (empieza en 0).
    setCounter: una función que actualiza ese valor.
    Entonces, la línea significa:
    “Crea un estado llamado counter, que empieza en 0, y dame una función setCounter para cambiarlo.”
  */

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

    const Display = (props) => (
    <div>
      <h1>statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.good+props.neutral+props.bad}</p>
      <p>average: {(props.good-props.bad)/(props.good+props.neutral+props.bad)}</p>
      <p>positive: {(props.good*100)/(props.good+props.neutral+props.bad)} %</p>      
    </div>

  )

const App = () => {
  //const [value, setValue] = useState(10)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  /*
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }
*/
  const setToGood = (good) => {
    console.log('value for good now:', good)    
    setGood(good)
  }
  const setToNeutral = (neutral) => {
    console.log('value for neutral now:', neutral)        
    setNeutral(neutral)
  }  
  const setToBad = (bad) => {
    console.log('value for bad now:', bad)        
    setBad(bad)
  }  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="bad" />
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App