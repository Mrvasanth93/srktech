import "./About.css"
const About = () => {
    return (
        <>
            <div id="about" className="about">
                <div className="about-img"></div>
                <div className="about-details">
                    <div className="about-head">
                        <h4>About Us</h4>
                    </div>
                    <div className="about-content">
                        <h5>
                            SRKTECHGROUP in Thanjavur offers expert solutions in electrical wiring, appliance repair, plumbing, CCTV, AC, inverter, washing machine, RO service, and solar panel installation. We ensure reliable, professional service for homes and offices with a focus on quality and safety.
                        </h5>
                    </div>
                    <div className="contact-btn">
                        <h4><a href="#services">View services</a></h4>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About;