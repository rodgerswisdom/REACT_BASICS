import React from "react";

function Button(){
    const data = {
        'data' : 'Download CV'
    }
    return(
        <div>
            <button>{data.data}</button>
        </div>
    )
}

export default Button;