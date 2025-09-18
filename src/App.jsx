import './App.css'
import Home from './Pages/Home'
import Nav from './Compononts/Nav'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import SideBar from './Compononts/Sidebar'

function App() {
  return(
    <>
      <Nav/>
      <Home/>
      <Services/> 
      <About/>
      <Contact/>
    </>
  )
}

export default App
