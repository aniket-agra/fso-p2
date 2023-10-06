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
    return (
        <>
            <Header course = {course["name"]} />
            {
                course["parts"].map(part => 
                    <Part name = {part.name} exercises = {part.exercises} key = {part.id} />
                )
            }
        </>
    )
}

export {Course}