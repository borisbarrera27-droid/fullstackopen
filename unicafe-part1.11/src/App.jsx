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



//Es curioso saber que un componenten con =>{} si acepta condiciones y el =>() no acepta
const Statistics = (props) => {

  if(props.good != 0 || props.neutral != 0 || props.bad != 0){
    return (
    <div>

      <table>
      <tbody>
      <StatisticLine texte="good" value ={props.good} />
      <StatisticLine texte="neutral" value ={props.neutral} />
      <StatisticLine texte="bad" value ={props.bad} />
      <StatisticLine texte="all" value ={props.all} />
      <StatisticLine texte="average" value ={props.ave/props.all} />     
      <StatisticLine texte="positive" value ={(props.good*100)/(props.all)+'%'} />  
      </tbody>
      </table>
    </div>      
    )
  }

  return (
    <p>No feedback given</p>
  )

}

const StatisticLine = (props) => {
  //Recordemos que texte y value son los valores madre que se pasan a este componente para mostrar
  return (
    <>

      <tr>
          <th>{props.texte}</th>
          <td>{props.value}</td>
      </tr>

    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  
  const [all, setAll] = useState(0)
  const [ave, setAve] = useState(0) 

 
  const setToGood = (good) => {
    console.log('value for good now:', good)    
    setGood(good)
    setAll(all+1)
    setAve(ave+1)
  }
  const setToNeutral = (neutral) => {
    console.log('value for neutral now:', neutral)        
    setNeutral(neutral)
    setAll(all+1)    
  }  
  const setToBad = (bad) => {
    console.log('value for bad now:', bad)        
    setBad(bad)
    setAll(all+1)
    setAve(ave-1)    
  }  


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} ave={ave}/>


    </div>
  )
}

export default App