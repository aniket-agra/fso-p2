const Header = function (props) {
    return (
        <>
           <h1>{props.course}</h1>
        </>
    )
}

const Part = function (props) {
    return (
      <>
        <p>
          {props.name} {props.exercises}
        </p>
      </>
    )
}

function Course({course}) {
    const totalExercises = course["parts"].reduce((total, part) => total + part["exercises"], 0);
    return (
        <>
            <Header course = {course["name"]} />
            {
                course["parts"].map(part => 
                    <Part name = {part.name} exercises = {part.exercises} key = {part.id} />
                )
            }
            <b>total of {totalExercises} exercises</b>
        </>
    )
}

export {Course}