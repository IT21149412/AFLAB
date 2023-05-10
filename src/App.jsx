import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Banner from './components/Banner'

function App() {
  
  return (
    <>
      <NavBar/>
      
      <Greeting/>

      <Card Tittle={"Computer"} image={'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg'} description={"This is a computer"} />
      <Card Tittle = "My second work " image = "https://picsum.photos/200/400" description = "This is my second work" />

      <h2>Custormize Buttons </h2>
          <Button color = "#ff0000" size = "70%" name = "Red Button"></Button><br/>
          <Button color = "#FFC0CB" size = "30%" name = "Pink Button"></Button><br/>
          <Button color = "#0000ff" size = "20%" name = "white Button"></Button><br/>
          <Button color = "#000000" size = "50%" name = "black Button"></Button><br/>
      <Footer/>

      <Banner color="#FFC0CB" image = "https://picsum.photos/200/400" message = "Hello!"/>
      <Banner image = "https://picsum.photos/200/300" color = "#ff0000" message = "This is my  First  banner" /><br/>
      <Banner image = "https://picsum.photos/200/400" color = "#FFC0CB" message = "This is my  Second  banner" />

    </>
  )
}

export default App
