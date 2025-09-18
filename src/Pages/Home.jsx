import img1 from "../assets/2 (1).jpg"
import "./home.css"
const Home = () => {
    return (
        <>
            <div id="home" className="home">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="content">
                    <h3>We <span>install, repair, maintain</span> - dependable electrical care for every
                        household.
                    </h3>
                    <h4>Contact us</h4>
                </div>
            </div>
        </>
    )
}
export default Home