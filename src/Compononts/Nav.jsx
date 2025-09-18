import "./Nav.css"
import menulogo from "../assets/icons8-menu-bar-48.png"
import SideBar from "./Sidebar"
import { useEffect, useState } from "react"
const Nav = () => {
    const [showSideBar,setShowSideBar] = useState(false)
    useEffect(()=>{
    },[setShowSideBar])
    return (
        <>
            {
                showSideBar == true && <SideBar isShow={showSideBar}/>
            }
            <div className="nav">
                <div className="nav-container">
                    <div className="left">
                        <h5>SRKTECH.</h5>
                    </div>
                    <div className="right">
                        <h5>Home</h5>
                        <h5>about</h5>
                        <h5>services</h5>
                        <h5>contact</h5>
                    </div>
                    <div onClick={()=>{
                        console.log("before :" +showSideBar);
                        if(showSideBar == true){
                            setShowSideBar(false)
                            console.log("in between" + showSideBar);
                            setShowSideBar(!showSideBar)
                        }
                        else{
                            setShowSideBar(!showSideBar)
                            setShowSideBar(!showSideBar)
                        }

                        console.log("after :" +showSideBar);
                        
                    }} className="menu-logo">
                        <img src={menulogo} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav