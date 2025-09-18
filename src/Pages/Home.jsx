import img1 from "../assets/1 (1).jpg"
import "./home.css"
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="content">
                    <h3>We install, repair, maintain - dependable electrical care for every
                        household.
                    </h3>
                    <h5>Reliable home and commercial electrical, electronics, and
                        plumbing services. From wiring, appliance repair, CCTV installation to
                        solar panel setup, SRK Tech ensures quality at affordable costs.</h5>
                    <h4>Contact us</h4>
                </div>
            </div>
        </>
    )
}
export default Home