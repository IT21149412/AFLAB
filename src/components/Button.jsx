import React from 'react'

function Button(props) {

    const styleFunc = {
        backgroundColor: props.color,
        size: props.size
    }
   
  return (
    <div>
       
        <button style = {styleFunc} >
            {props.name}
        </button>
    </div>
    
  )
}

export default Button
