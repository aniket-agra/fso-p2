function Notification ({message}) {
    const notificationStyle = {
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px"
    }
    if (message === null) {
        return (
            <>
            </>
        )
    }
    else {
        notificationStyle["color"] = message.includes("Error") ? "red" : "green";
        return (
            <div style = {notificationStyle}>
                {message}
            </div>
        )
    }
}

export { Notification }