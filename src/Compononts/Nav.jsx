import "./Nav.css"
import menulogo from "../assets/icons8-menu-bar-48.png"
const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className="bottom">
                    <div className="left">
                        <h5>Power</h5>
                    </div>
                    <div className="right">
                        <h5>Home</h5>
                        <h5>about</h5>
                        <h5>services</h5>
                        <h5>contact</h5>
                    </div>
                </div>
                <div className="menu-logo">
                    <img src={menulogo} alt="" />
                </div>
            </div>
        </>
    )
}
export default Nav