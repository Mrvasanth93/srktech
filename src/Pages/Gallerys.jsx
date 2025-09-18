import "./Gallerys.css"
import img1 from "../assets/1 (1).jpg"
import img2 from "../assets/2 (1).jpg"
import img3 from "../assets/1 (2).jpg"
import img4 from "../assets/homebg.jpg"
import { useEffect, useState } from "react"
const Gallery = () =>{
    const [images,setImages] = useState([img1,img2,img3,img4])
    const [current,setCurrent] = useState(0)
    const handleMove = (data) =>{
        if(data == "prev"){
            if(current == 0){
                setCurrent(current)
            }
            else{
                setCurrent(current-1)
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
            <div className="tittle">
                <h4>Our Projects</h4>
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