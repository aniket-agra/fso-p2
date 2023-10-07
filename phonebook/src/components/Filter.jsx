import { useState } from "react";

function Filter({query, updateQuery}) {

    return (
        <>
            <div>
                filter shown with: <input  
                                        type = "text"
                                        value = {query}
                                        onChange = {updateQuery}
                                    />
            </div>
        </>
    );
}

export {Filter};