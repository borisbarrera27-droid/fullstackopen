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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}

export default App