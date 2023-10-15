import { useState, useEffect } from "react";
import axios from "axios";

function Search({label, text, handler}) {
    return (
        <>
            {label}: <input
                        type = "text"
                        value = {text}
                        onChange = {handler}
                    />
        </>
    )
}

function App () {
    const [query, setQuery] = useState("");
    const [countryData, setCountryData] = useState([]);

    useEffect( () => {
        axios
            .get("https://studies.cs.helsinki.fi/restcountries/api/all")        
            .then(response => setCountryData(response["data"]));
    }, []);

    function updateSearch(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <Search label = "find countries" text = {query} handler = {updateSearch} />
        </>
    )
}

export default App