import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import pay1 from "../images/pay1.png"
import pay2 from "../images/pay2.png"
import "./Payment.css"

const Payment = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, [])
  return (
    <div>
        <div className="pay_all">
            <div className="imgrelative position-relative">
                <img src={pay1} alt=""  className='payimg'/>
                <div className="imgtext position-absolute" data-aos="fade-up"
     data-aos-duration="3000">
                    <h4 className="pay_title">payment option</h4>
                    <hr className="pay_hr" />
                    <p className="pay_text">Emaar properties offer various payment options to help make your property purchase as stress-free as possible. Some project have up to 3 Years payment plan and we also offer mortgage option for ready units. Click "Enquire Now" below to get more information about payment options available for your purchase.</p>
                    <p className="pay_link">enquire now</p>
                </div>
            </div>
            <div className="imgrelativesec position-relative">
                <img src={pay2} alt=""  className='payimg'/>
                <div className="imgtextsec position-absolute" data-aos="fade-up"
     data-aos-duration="3000">
                    <h4 className="pay_title sec">MORE <br /> <span>ABOUT EMAAR</span></h4>
                    <hr className="pay_hr" />
                    <p className="pay_text sectext">Emaar is the master-developer of Downtown Dubai, which occupies two of the most prestigious square kilometres in Dubai. Flanked on either side by Sheikh Zayed Road and Financial Centre Road, this dynamic city hub has catalysed the economy and cemented Dubai’s reputation as a true global icon. Providing the ultimate metropolitan lifestyle abounding with world-class landmarks, entertainment and glamour, Downtown Dubai is a true heart of the emirate.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment