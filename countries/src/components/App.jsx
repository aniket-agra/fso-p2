import { useState, useEffect } from "react";

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

    function updateSearch(e) {
        console.log(query);
        setQuery(e.target.value);
    }

    return (
        <>
            <Search label = "find countries" text = {query} handler = {updateSearch} />
        </>
    )
}

export default App