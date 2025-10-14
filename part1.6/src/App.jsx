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

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }



  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}

export default App