import img1 from "../assets/1 (1).jpg"
import "./Home.css"
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
                    <h4><a href="#contact">Contact us</a></h4>
                </div>
            </div>
        </>
    )
}
export default Home
