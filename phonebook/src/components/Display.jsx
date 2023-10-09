function Display({toDisplay, deleteEntry}) {
    return (
        <>
            {
                toDisplay.map(person => 
                <div key = {person["name"]}>
                    {person["name"]} {person["number"]} 
                    <button onClick = {() => deleteEntry(person["name"])}>Delete</button>
                </div>
                )
            }
        </>
    )
}

export {Display}