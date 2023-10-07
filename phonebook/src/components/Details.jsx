function Details({formHandler, newName, updateNewName, number, updateNumber}) {
    
    return (
        <>
            <form onSubmit = {formHandler}>
            <div>
                name: 
                <input
                    type = "text"
                    value = {newName}
                    onChange = {updateNewName}
                />
            </div>
            <div>
                number: 
                <input 
                    type = "text"
                    value = {number}
                    onChange = {updateNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </>
    )
}

export {Details}