import React from 'react'
import "./Body.css"
import first from "../images/top1.jpg"
import second from "../images/top2.jpg"
import third from "../images/top3.jpg"
import Map from './Map'

const Body = () => {
  return (
    <div>
        <div className="container">
             <h3 className="body_h">top projects</h3>
             <div className="project_all">
                <div className="project_first position-relative">
                    <img src={first} alt="" className="image_firstd" />
                    <div className="img_text position-absolute">
                        <p className="img_title">creek rise</p>
                        <p className="img_texts">FROM <span className="text_span">AED 2,288,888</span> </p>
                    </div>
                </div>
                <div className="project_first position-relative">
                    <img src={second} alt="" className="image_firstd" />
                    <div className="img_text position-absolute">
                        <p className="img_title">EXPO GOLF VILLAS 6</p>
                        <p className="img_texts">FROM <span className="text_span">AED 2,288,888</span> </p>
                    </div>
                </div>
                <div className="project_firstd position-relative">
                    <img src={third} alt="" className="image_firstd" />
                    <div className="img_text position-absolute">
                        <p className="img_title">HILLS PARK</p>
                        <p className="img_texts">FROM <span className="text_span">AED 2,288,888</span> </p>
                    </div>
                </div>
             </div>
             <Map/>
                </div>
             
        </div>
       
    // </div>
  )
}

export default Body
