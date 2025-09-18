import "./Sidebar.css"
import logo from "../assets/Picsart_25-09-17_10-28-31-284.png"
import { useEffect, useState } from "react"
const SideBar = (probs) => {
    const [isShow, setShow] = useState(probs.isShow)
    const show = () => {
        setShow(!isShow)
    }
    useEffect(() => {
        setShow(probs.isShow)
    }, [setShow])
    return (
        <>
            {
                isShow == true && <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="header">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div onClick={show} className="close">
                                <h5>&times;</h5>
                            </div>
                        </div>
                        <div className="middle">
                            <h4 onClick={show}><a href="#home">Home</a></h4>
                            <h4 onClick={show}><a href="#about">About</a></h4>
                            <h4 onClick={show}><a href="#services">Services</a></h4>
                            <h4 onClick={show}><a href="#gallery">Gallery</a></h4>
                            <h4 onClick={show}><a href="#contact">Contact</a></h4>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default SideBar