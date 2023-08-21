import React,{useEffect, useState} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Header.css"
import bg from "../images/mainbg.png"
import sale from "../images/emaar1.png"
import "./Modalsrc.css";
import {Link} from 'react-router-dom'
import Form from ".././Adminpage/Form"
import { Modal } from "antd";
import "aos/dist/aos.css"

const Header = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
        <div className="header_all">
        <div className='position-relative' >
           <img src={bg} alt="" className="header_img"/>
        </div>
        <div className="cont">
            <div className="header_left position-absolute">
                <h2 className="header_title">EMAAR</h2>
                <hr className='header_hr'/>
                <p className="header_text">Dubai creek harbour</p>
                <div className="all">
                    <div>
                        <p className="number">20%</p>
                        <p className="text">to book a unit</p>
                    </div>
                    <div>
                        <p className="number">4 years</p>
                        <p className="text">paymant plan</p>
                    </div>
                    <div>
                        <p className="number">aed 2.2mln</p>
                        <p className="text">prices from</p>
                    </div>
                </div>
                <Link href="" className="link">See project 
                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="6" viewBox="0 0 79 6" fill="none" className='project_vector'>
                    <path d="M79 3L74 0.113249V5.88675L79 3ZM0 3.5H74.5V2.5H0V3.5Z" fill="white"/>
                </svg></Link>
            </div>
            </div>
        </div>
        {/* <din className="container"> */}
        <div className="header_forsale">
            <div className='sale_left' data-aos="fade-up"  data-aos-duration="3000">
                <img src={sale} alt="" class="sale_img-adap" />
            </div>
            <div className="sale_right" data-aos="fade-up"  data-aos-duration="3000">
                <h3 className="sale_title">AVAILABLE HOMES FOR SALE BY EMAAR PROPERTIES</h3>
                <p className="sale_text">Emaar roperties is one of the world’s most valuable and admired real estate development companies. With proven competencies in properties, shopping malls & retail and hospitality & leisure.Emaar Properties is one of the world’s most valuable and admired real estate development companies</p>
                <div className='sale_all'>
                <div className='divmarg'>
                        <p className="sale_number">$10.9 bln</p>
                        <p className="sale_p">Market cap</p>
                    </div>
                <div className='divmarg'>
                        <p className="sale_number">$7.7 bln</p>
                        <p className="sale_p">Revenue</p>
                    </div>
                <div className='divmarg'>
                        <p className="sale_number">$1 bln</p>
                        <p className="sale_p">Net profit</p>
                    </div>
                </div>
                <button onClick={showModal} class="sale_link">see more</button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form />
            </Modal>
            </div>
        </div>
        {/* </din> */}
    </div>
  )
}

export default Header