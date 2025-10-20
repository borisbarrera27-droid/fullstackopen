import { useState } from 'react'


const Display = (props) =>(
  <div>
    <h1>Anecdote of the Day</h1>
    {props.des} 
    <p>has {props.vot} votes</p>
  </div>
)


const App = () => {
  const [win, setWin] = useState(0)
  const [mvo, setMv] = useState({})
  const [ane, setAne] = useState([
    {
      des : "If it hurts, do it more often.",
      vot : 0
    },
    {
      des : "Adding manpower to a late software project makes it later!",
      vot : 0
    },
    {
      des : "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vot : 0
    },
    {
      des : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vot : 0
    },
    {
      des : "Premature optimization is the root of all evil.",
      vot : 0
    },
    {
      des : "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vot : 0
    },
    {
      des : "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      vot : 0
    },
    {
      des : "The only way to go fast, is to go well.",
      vot : 0
    }
  ])

  const [selected, setSelected] = useState(0)


  const randomSelected = (value) => {
    const sel = Math.floor(Math.random() * ane.length)
    setSelected(sel)
  }

  const voteSelected = () => {
    console.log("ANTES DE CAMBIAR",ane[selected].vot)
    //Creamos la copia del array nuevo para que se renderice bien
    const aned = [...ane]
    //Cambiamos el objeto para que no sea referencial
    aned[selected] = { ...aned[selected], vot: aned[selected].vot + 1 } 
    setAne(aned)
    console.log("DESPUES DE CAMBIAR",ane[selected].vot)       
    console.log(aned)
  }

  const mostVoted = () =>{


    const found = ane.find((element) => element.vot > 1);
    /*
    ane.forEach((element, i) => {
      if (ane[i].vot>win){
        const w = ane[i].vot
        setWin(w)     
      }
    });
    */
    console.log(found)
  }

  return (
    <div>
      <Display des={ane[selected].des} vot={ane[selected].vot}/>

      {console.log("Seleccionado ->",selected)}
      {console.log(ane)}
      <p>__________________________________</p>
      <button onClick={voteSelected}>vote</button>      
      <button onClick={()=>{randomSelected(selected)}}>next anecdote : {ane.length}</button>
      <p>__________________________________</p>
      {mostVoted()}
    </div>
  )
}

export default App