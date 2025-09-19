import "./Contact.css"
import phone from "../assets/phone.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import whatsapp from "../assets/whatsapp.png"
import instgram from "../assets/instagram.png"
import facbook from "../assets/facebook.png"
import { useState } from "react"
const Contact = () => {
    const phoneNumber = "9787208604"
    const message = encodeURIComponent("Hello SRK TECH GROUP, I need a service.")
    return (
        <>
            <div id="contact" className="contact">
                <div className="contact-main">
                    <h3>Get in touch</h3>
                    <h6>Reach out today for fast, reliable, and expert service.</h6>
                    <div className="top">
                        <div className="left">
                            <div className="logo">
                                <img src={phone} alt="" />
                            </div>
                            <div>
                                <h6><a href="tel:+9197872 08604">97872 08604</a></h6>
                                <h6><a href="tel:+9188388 45171">88388 45171</a></h6>
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
                            <h6><a href="mailto:srktechgroup@gmail.com?subject=Service%20Enquiry&body=Hello%20SRK%20Tech%20Group">srktechgroup@gmail.com</a></h6>
                            </div>
                        </div>
                        <div className="right">
                            <h5></h5>
                            <h6></h6>
                        </div>
                    </div>
                    <div className="social-media">
                        <div className="icon"><a href=""><img src={whatsapp} alt="" /></a></div>
                        <div className="icon"><a href=""><img src={facbook} alt="" /></a></div>
                        <div className="icon"><a target="_blank" rel="noopener noreferrer" href="https://wa.me/88388 45171"><img src={instgram} alt="" /></a></div>
                    </div>
                    <h4>SRK TECH GROUP</h4>
                </div>
            </div>
        </>
    )
}

export default Contact;