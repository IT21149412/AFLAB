//Profile.jsx component

import React from "react";

export default function Profile({name, size}){
    return(
        <>
        <div>
            <h3> {name}</h3>
            <img
                src="https://images.pexels.com/photos/6976943/pexels-photo6976943.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jane Smith"
                width={size}
            />
        </div>
        </>
        
    )
}