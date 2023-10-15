function DisplayList({matchList}) {
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
                matchList.map(element => <li key = {element["cca3"]}>{element["name"]["common"]}</li>)
            }
        </ul>
    );
}

export {DisplayList}