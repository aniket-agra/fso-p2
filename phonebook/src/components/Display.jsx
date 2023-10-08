function Display({toDisplay}) {
    return (
        <>
            {
                toDisplay.map(person => 
                <div key = {person["name"]}>{person["name"]} {person["number"]}</div>
                )
            }
        </>
    )
}

export {Display}