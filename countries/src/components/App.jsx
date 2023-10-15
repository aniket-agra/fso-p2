import { useState, useEffect } from "react";
import { Search } from "./Search";
import { DisplayList } from "./DisplayList";
import { DisplayCountry } from "./DisplayCountry";
import axios from "axios";

function App () {
    const [query, setQuery] = useState("");
    const [countryData, setCountryData] = useState([]);
    const [toDisplay, setToDisplay] = useState(null);
 
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
        if (toDisplay !== null)
            setToDisplay(null);
    }

    function handleShow(country) {
        console.log(country);
        setToDisplay(country);
    }

    return (
        <>
            <Search label = "find countries" text = {query} handler = {updateSearch} />
            <DisplayList matchList = {matchList} handleClick = {handleShow}/>    
            <DisplayCountry country = {matchList.length === 1 ? matchList[0] : toDisplay} /> 
        </>
    )
}

export default App