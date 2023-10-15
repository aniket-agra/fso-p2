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
                matchList.map(country => {
                    return (
                        <li key = {country["cca3"]}>
                            {country["name"]["common"]}&nbsp;
                            <button onClick = {() => handleClick(country)}>show</button>
                        </li>
                    );                    
                })
            }
        </ul>
    );
}

export {DisplayList}