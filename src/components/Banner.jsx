import React from 'react'
"https://picsum.photos/200/300"
export default function Banner(props) {

    const stylefunc = {
       
        color : props.color,
    }
  return (
    <div>
      <img  src = {props.image} alt="Banner" style={stylefunc}/>
      {props.message}
    </div>
  )
}
