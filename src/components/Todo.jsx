//Todo.jsx component

import React from "react"

function Item({item, isCompleted}){
    if (isCompleted){
        return <li>{item} - done</li>
    }
    return <li>{item}</li>

    //return <li> {isCompleted ? item + "- done" : item}</li>;
}

export default function Todo() {
    return(
        <>
        <div>
            <h3>Todo List</h3>
        <ul>
                <Item item="Get Apples" isCompleted={false}/>
                <Item item="Get Break" isCompleted={true}/>
                <Item item="Do Assignment" isCompleted={true}/>
                <Item item="Do test" isCompleted={false}/>
            </ul>
        </div>
            
        </>
    )
}