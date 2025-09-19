import img1 from "../assets/2 (1).jpg"
import img2 from "../assets/IMG-20250918-WA0011.jpg"
import img3 from "../assets/IMG-20250918-WA0014.jpg"
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
                    <h4><a href="#contact">Contact us</a></h4>
                </div>
            </div>
        </>
    )
}
export default Home