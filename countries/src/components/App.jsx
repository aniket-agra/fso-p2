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

function App () {
    const [query, setQuery] = useState("");
    const [countryData, setCountryData] = useState([]);

    useEffect( () => {
        axios
            .get("https://studies.cs.helsinki.fi/restcountries/api/all")        
            .then(response => setCountryData(response["data"]));
    }, []);

    const matchList = countryData.filter(country => {
        return country["name"]["common"].toLowerCase().includes(query.toLowerCase());
    });

    console.log(matchList);

    function updateSearch(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <Search label = "find countries" text = {query} handler = {updateSearch} />
            <DisplayList matchList = {matchList} />
            {
                matchList.length === 1 ? <DisplayCountry country = {matchList[0]} /> : null
            }
        </>
    )
}

export default App