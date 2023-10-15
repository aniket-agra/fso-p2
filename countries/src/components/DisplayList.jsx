function DisplayList({matchList, handleClick}) {
    if (matchList.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    if (matchList.length === 1) {
        return null;
    }
    return (
        <ul>
            {
                matchList.map(element => {
                    return (
                        <li key = {element["cca3"]}>
                            {element["name"]["common"]}&nbsp;
                            <button onClick = {() => handleClick(element)}>show</button>
                        </li>
                    );                    
                })
            }
        </ul>
    );
}

export {DisplayList}