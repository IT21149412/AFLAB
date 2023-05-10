//Hello.jsx component

import React from "react";
import { useState } from "react";

export default function Hello(){

    const [name, setName] = useState("");

    function handleInputChange(e){
        setName(e.target.value);
    }

    function handleOnClick(){
        alert(`Hello, ${name}`);
    }

    return(
        <div>

            <label>
                Enter name:
                <input value={name} onChange={handleInputChange}/>
            </label>
            <button onClick={handleOnClick}>Submit</button>
        </div>
    )
}