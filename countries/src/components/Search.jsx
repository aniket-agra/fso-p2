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

export { Search }