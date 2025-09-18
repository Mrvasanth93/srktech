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
            <div id="contact" className="contact">
                <div className="contact-main">
                    <h3>Get in touch</h3>
                    <h6>Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit.
                         Officiis, quas.</h6>
                    <div className="top">
                        <div className="left">
                            <div className="logo">
                                <img src={phone} alt="" />
                            </div>
                            <div>
                                <h6>97872 08604</h6>
                                <h6>88388 45171</h6>
                                <h6></h6>
                            </div>
                        </div>
                        <div className="right">
                            <div className="logo">
                                <img src={location} alt="" />
                            </div>
                            <div>
                                <h6>Surabi complex, Dr.mohan clinic </h6>
                                <h6>New bus stand Thanjavur 613005</h6>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="logo">
                                <img src={mail} alt="" /></div>
                            <div>
                            <h6>mrvasanth93@gmail.com</h6>
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
                    <h4>SRK Electrical & Electronics services</h4>
                </div>
            </div>
        </>
    )
}

export default Contact;