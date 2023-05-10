//Avatar.jsx component

import React from "react";

export default function Avatar({img,size}){
    return(
        <div>
            <img src = {img.url}
            alt = {img.name}
            width={size}>
            </img>
        </div>
    )
}