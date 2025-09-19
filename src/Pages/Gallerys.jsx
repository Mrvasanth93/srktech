import "./Gallerys.css"
import img1 from "../assets/1 (1).jpg"
import img4 from "../assets/homebg.jpg"
import img5 from "../assets/IMG-20250918-WA0010.jpg"
import img6 from '../assets/IMG-20250918-WA0012.jpg'
import img7 from "../assets/IMG-20250918-WA0015.jpg"
import { useEffect, useState } from "react"
const Gallery = () =>{
    const [images,setImages] = useState([img1,img4,img5,img6,img7])
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
                <div className={classname != "" && classname}>
                    <img src={images[current]} alt="" />
                </div>
                <div onClick={()=>{handleMove("next")}}className="right">&gt;</div>
            </div>
        </>
    )
}
export default Gallery;