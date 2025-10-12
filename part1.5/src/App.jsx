

const Header = (props) => {
  console.log('Header', props)  
  return (
    <div><h1>{props.course}</h1></div>
  )
}

const Content = (props) => {
  console.log('Content', props)   
  //excercises 1 hace referencia al Content de App, no al objeto principalaaaa
  return (
    <div>
      <Part part1={props.part1} exercises1={props.exercises1}/>
      <Part part2={props.part2} exercises2={props.exercises2}/>
      <Part part3={props.part3} exercises3={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  console.log('Part', props) 
  //excercisos1 hace referencia a excercises 1 de Content
  return (
    <div>
      <p>{props.part1}{props.exercises1}</p>
      <p>{props.part2}{props.exercises2}</p>
      <p>{props.part3}{props.exercises3}</p>
    </div>
  )
}


const Total = (props) => {
  console.log('Total', props)   
  return (
    <div>
      {props.exe1+props.exe2+props.exe3}
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content
        part1={part1.name} exercises1={part1.exercises}
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises}
      />
      <Total 
      exe1={part1.exercises}
      exe2={part2.exercises}
      exe3={part3.exercises}
      />
    </div>
  )
}

export default App