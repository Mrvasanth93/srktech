import "./Contact.css"
import phone from "../assets/phone.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import whatsapp from "../assets/whatsapp.png"
import instgram from "../assets/instagram.png"
import facbook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"
import { useState } from "react"
const Contact = () => {
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
                        <a href={`https://wa.me/8838845171?text=${message}`}><div className="icon"><img src={whatsapp} alt="" /></div></a>
                        <a href=""><div className="icon"><img src={facbook} alt="" /></div></a>
                        <a href=""><div className="icon"><img src={instgram} alt="" /></div></a>
                        <a href=""><div className="icon"><img src={youtube} alt="" /></div></a>
                    </div>
                    <h4>SRK TECH GROUP</h4>
                </div>
            </div>
        </>
    )
}

export default Contact;