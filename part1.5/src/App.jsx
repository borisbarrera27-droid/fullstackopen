const Header = (props) => {
  console.log('Header', props)  
  return (
    <div><h1>{props.course}</h1></div>
  )
}

const Content = (props) => {
  console.log('Content', props)   
  //excercises 1 hace referencia al Content de App, no al objeto principal
  return (
    <div>
      <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises}/>
      <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises}/>
      <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log('Part', props) 
  //excercisos1 hace referencia a excercises 1 de Content
  //ESTE HACE REFERENCIA A COMO LLAMES LOS PART DE CONTENT <Part part1
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
      {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App