import "./Sidebar.css"
import logo from "../assets/Picsart_25-09-17_10-28-31-284.png"
import { useEffect, useState } from "react"
const SideBar = (probs) => {
    const [isShow,setShow] = useState(probs.isShow)
    const show = () =>{
        setShow(!isShow)
    }
    useEffect(()=>{
        setShow(probs.isShow)
    },[setShow])
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
                            <h4>Home</h4>
                            <h4>About</h4>
                            <h4>Services</h4>
                            <h4>Contact Us</h4>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default SideBar