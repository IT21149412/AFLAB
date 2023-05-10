//App.js

import Profile from "./components/Profile"
import Todo from "./components/Todo"
import People from "./components/People"
import Hello from "./components/Hello"
import Avatar from "./components/Avatar"

function App() {

  //avatar
  let image = {
    name: "jane",
    url : "https://images.pexels.com/photos/5876695/pexels-photo5876695.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  };
    let size = 300;
  

  return (
    <>
    <div>
      <section>
      <Todo/>
        <Profile name="Jane" size={200}/>
        <People/>

        <Hello/>

        <Avatar img={image} size={size}/>
        <Avatar img={image} size={200}/>

        <h4>{import.meta.env.VITE_API_KEY}</h4>
      </section>
    </div>
    </>
  )
}

export default App
