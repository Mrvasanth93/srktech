import './App.css'
import Home from './Pages/Home'
import Nav from './Compononts/Nav'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import SideBar from './Compononts/Sidebar'
import Gallery from './Pages/Gallerys'

function App() {
  return(
    <>
      <Nav/>
      <Home/>
      <About/>
      <Services/> 
      <Gallery/>
      <Contact/>
    </>
  )
}

export default App
