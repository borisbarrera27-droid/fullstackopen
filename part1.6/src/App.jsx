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
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App