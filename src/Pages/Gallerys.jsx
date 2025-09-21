import "./Gallerys.css"
import img1 from "../assets/gallery1.jpg"
import img2 from '../assets/gallery2.jpg'
import img3 from "../assets/gallery3.jpeg"
import img4 from "../assets/gallery4.jpg"
import img5 from '../assets/gallery5.jpg'
import img6 from "../assets/gallery6.jpg"
import img7 from "../assets/gallery7.jpg"
import img8 from '../assets/gallery8.jpg'
import img9 from "../assets/gallery9.jpg"
import img10 from "../assets/gallery10.jpg"
import img11 from '../assets/gallery11.jpg'
import img12 from "../assets/gallery12.jpg"
import img13 from '../assets/gallery13.jpg'
import img14 from "../assets/gallery14.jpg"
import img15 from '../assets/gallery15.jpg'
import img16 from "../assets/gallery16.jpg"
import img17 from '../assets/gallery17.jpg'
import img18 from "../assets/gallery18.jpg"

import { useEffect, useState } from "react"
const Gallery = () =>{
    const [images,setImages] = useState([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18])
    const [current,setCurrent] = useState(0)
    const [classname,setClassname] = useState('image')
    const handleMove = (data) =>{
        if(data == "prev"){
            if(current == 0){
                setCurrent(current)
            }
            else{
                setCurrent(current-1)
                setClassname(classname)
            }
        }
        else{
            if(current == images.length-1){
                setCurrent(current)
            }
            else{
                setCurrent(current+1)
            }
        }
    }
    return(
        <>
            <div id="gallery" className="tittle">
                <h4>Our Work</h4>
            </div>
            <div className="gallery">
                <div onClick={()=>{handleMove("prev")}} className="left">&lt;</div>
                <div className="image">
                    <img src={images[current]} alt="" />
                </div>
                <div onClick={()=>{handleMove("next")}}className="right">&gt;</div>
            </div>
        </>
    )
}
export default Gallery;