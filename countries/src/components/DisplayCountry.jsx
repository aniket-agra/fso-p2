function DisplayCountry({country}) {
    return (
        <div>
            <h1>{country["name"]["common"]}</h1>
            <h2 />
            <div>capital {country["capital"]}</div>
            <div>area {country["area"]}</div>
            <h2 />
            <p><b>languages: </b></p>
            <ul>
                {
                    Object.values(country["languages"]).map(language => <li key = {language}>{language}</li>)
                }
            </ul>
            <br />
            <img 
                src = {country["flags"]["svg"]}    
                alt = {`Flag of ${country["name"]["common"]}`} 
                height = "224px"
                width = "224px"
            />
        </div>
    )
}

export {DisplayCountry}