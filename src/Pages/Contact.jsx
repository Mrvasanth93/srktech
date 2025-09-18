import "./Contact.css"
import phone from "../assets/phone.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import whatsapp from "../assets/whatsapp.png"
import instgram from "../assets/instagram.png"
import facbook from "../assets/facebook.png"
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-main">
                    <h3>Get in touch</h3>
                    <div className="top">
                        <div className="left">
                            <div className="logo">
                                <img src={phone} alt="" />
                            </div>
                            <div>
                                <h5>Call us</h5>
                                <h6>+91-9345488130</h6>
                            </div>
                        </div>
                        <div className="right">
                            <div className="logo">
                                <img src={location} alt="" />
                            </div>
                            <div>
                                <h5>Our Location</h5>
                                <h6>3/218 street</h6>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="logo">
                                <img src={mail} alt="" /></div>
                            <div>
                                <h5>Email</h5>
                            <h6>3/218 street</h6>
                            </div>
                        </div>
                        <div className="right">
                            <h5></h5>
                            <h6></h6>
                        </div>
                    </div>
                    <div className="social-media">
                        <div className="icon"><img src={whatsapp} alt="" /></div>
                        <div className="icon"><img src={facbook} alt="" /></div>
                        <div className="icon"><img src={instgram} alt="" /></div>
                    </div>
                    <h4>SRK tech</h4>
                </div>
            </div>
        </>
    )
}

export default Contact;