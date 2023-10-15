function Weather({city}) {
    if(city === null)
        return null;
    return (
        <div>
            <h2>Weather in {city}</h2>
            <div>temperature {}</div>
            <img 
                src = "#"  
                alt = "A weather icon"
                height = "224px"
                width = "224px"
            />
            <div>wind {}</div>
        </div>
    )
}

export {Weather}