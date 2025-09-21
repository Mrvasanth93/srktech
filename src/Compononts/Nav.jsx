import "./Nav.css"
import menulogo from "../assets/icons8-menu-bar-48.png"
import logo from "../assets/1758281366627.jpg"
import SideBar from "./Sidebar"
import { useEffect, useState } from "react"
const Nav = () => {
    const [showSideBar, setShowSideBar] = useState(false)
    const [copyShowSideBar,copySetShowSideBar] = useState(true)
    const handleSideBar = ()=>{
        setShowSideBar((prev)=>!prev)
    }
    return (
        <>
            {
                showSideBar == true && <SideBar isShow={showSideBar} />
            }
            <div className="nav">
                <div className="nav-container">
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="right">
                        <h5><a href="#home">Home</a></h5>
                        <h5><a href="#about">About</a></h5>
                        <h5><a href="#services">Services</a></h5>
                        <h5><a href="#gallery">Gallery</a></h5>
                        <h5><a href="#contact">Contact</a></h5>
                    </div>
                    <div onClick={()=>{handleSideBar()}} className="menu-logo">
                        <img src={menulogo} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav
