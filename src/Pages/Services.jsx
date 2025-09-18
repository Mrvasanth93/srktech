import './Services.css'
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"
import service5 from "../assets/service5.png"
import service6 from "../assets/service6.png"
import service7 from "../assets/service7.png"
import service8 from "../assets/service8.png"
import service9 from "../assets/service9.png"
import service10 from "../assets/service10.png"
import pinImg from "../assets/Picsart_25-09-17_10-28-31-284.png"
const data = [
    { "name": "Electrical wiring", "desc": "Electrical Wiring Professional wiring solutions for homes and offices. Safe installation, fault correction, and load management to ensure uninterrupted power supply with long-lasting performance.", "img": service1 },
    { "name": "Repairing service", "desc": "Repairing Service Expert repairing for electrical and electronic appliances. Quick diagnosis and efficient service to restore performance, ensuring durability and cost-effective solutions for all household electrical needs.", "img": service2 },
    { "name": "Plumbing", "desc": "Plumbing Complete plumbing solutions including leak repairs, pipeline installation, tap fitting, and maintenance. Reliableservice to keep water flow smooth and prevent future plumbing issues.", "img": service3 },
    { "name": "induction stove", "desc": "Induction Stove Service and repair for all types of induction stoves. Fast troubleshooting, part replacement, and maintenance to ensure your stove works efficiently and safely.", "img": service4 },
    { "name": "CCTV Instalation & service", "desc": "CCTV Camera Install & Service Secure your home or office with CCTV installation and maintenance. High-quality setup, camera configuration, and repair for reliable 24/7 surveillance and peace of mind.", "img": service5 },
    { "name": "Washing machine", "desc": "Washing Machine Installation, repair, and servicing of all brands of washing machines. From drum issues to motor faults, we provide quick, affordable, and professional service.", "img": service6 },
    { "name": "Fridge, Mixer & grinder", "desc": "Fridge & Mixer Grinder Expert repair for refrigerators and mixer grinders. Cooling issues, gas refilling, or motor faults – our technicians ensure smooth functioning and long-lasting performance.", "img": service7 },
    { "name": "RO water service", "desc": "RO Water Service RO water purifier installation, repair, and filter replacement. Keep your family safe with pure drinking water through timely maintenance and quality service.", "img": service8 },
    { "name": "Inverter Wiring", "desc": "Inverter Wiring Inverter wiring, battery connections, and load balancing services. Reliable backup power solutions with safe installation and troubleshooting for uninterrupted electricity supply.", "img": service9 },
    { "name": "Air conditionar(AC)", "desc": "A/C Install & Service AC installation, gas refilling, cooling repair, and full service for all models. Stay cool with professional, efficient, and affordable air conditioning support.", "img": service10 }
]
const Services = () => {
    return (
        <>
            <h4>What we do</h4>
            <div className="hrline">
                <div></div>
            </div>
            <div className="services">
                <div className="services">
                    {
                        data.map((data, index) => {
                            return <div className="service">
                                <div className="pin-img"><img src={pinImg} alt="" /></div>
                                <div className="service-img">
                                    <h3 className="service-count">{index == 9 ? 10 : `0${index + 1}`}</h3>
                                    {/*<img src={data.img} alt="" />*/}
                                </div>
                                <div className="service-head">
                                    <h5>{data.name}</h5>
                                </div>
                                <div className="service-description">
                                    <h6>
                                        {
                                            data.desc
                                        }
                                    </h6>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Services;