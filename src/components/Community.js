import React from 'react'
import "./Community.css"
import {Link} from 'react-router-dom'

import com1 from "../images/commun1.png"
import com2 from "../images/commun2.png"
import com3 from "../images/commun3.png"
import slid1 from "../images/ava12.png"
import slid2 from "../images/AVA13.png"
import slid3 from "../images/ava14.png"

const teg = "M0.0830078 14.7918V8.1512C0.0830078 7.71718 0.169813 7.30919 0.343424 6.92725C0.517036 6.5453 0.777452 6.2328 1.12467 5.98975V2.96891C1.12467 2.18766 1.38943 1.53228 1.91895 1.00277C2.44846 0.473253 3.10384 0.208496 3.88509 0.208496H8.57259C8.95454 0.208496 9.31044 0.295302 9.6403 0.468913C9.97016 0.642524 10.2566 0.876899 10.4997 1.17204C10.7427 0.876899 11.0248 0.642524 11.346 0.468913C11.6672 0.295302 12.0188 0.208496 12.4007 0.208496H17.0882C17.8695 0.208496 18.5292 0.473253 19.0674 1.00277C19.6056 1.53228 19.8747 2.18766 19.8747 2.96891V5.98975C20.2219 6.2328 20.4823 6.5453 20.6559 6.92725C20.8295 7.30919 20.9163 7.71718 20.9163 8.1512V14.7918H19.3538V12.7085H1.64551V14.7918H0.0830078ZM11.2809 5.54704H18.3122V2.96891C18.3122 2.62169 18.195 2.33523 17.9606 2.10954C17.7262 1.88384 17.4354 1.771 17.0882 1.771H12.3226C12.0275 1.771 11.7801 1.89252 11.5804 2.13558C11.3808 2.37863 11.2809 2.65641 11.2809 2.96891V5.54704ZM2.68717 5.54704H9.71842V2.96891C9.71842 2.65641 9.6186 2.37863 9.41895 2.13558C9.21929 1.89252 8.9719 1.771 8.67676 1.771H3.88509C3.55523 1.771 3.27311 1.88818 3.03874 2.12256C2.80436 2.35693 2.68717 2.63905 2.68717 2.96891V5.54704ZM1.64551 11.146H19.3538V8.1512C19.3538 7.85607 19.254 7.60867 19.0544 7.40902C18.8547 7.20936 18.6073 7.10954 18.3122 7.10954H2.68717C2.39204 7.10954 2.14464 7.20936 1.94499 7.40902C1.74533 7.60867 1.64551 7.85607 1.64551 8.1512V11.146ZM19.3538 11.146H1.64551H19.3538Z"


const Community = () => {
  return (
    <div>
        <div className="container ">
            <div className="community_all position-relative">
                <div className="community_left position-sticky">
                    <p className="com_title">community</p>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">dubai creek harbour</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">dubai hills estate</label>
                        </div>
                    <div class="form-check marg">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                        <label class="form-check-label" for="flexRadioDefault3"> emaar south</label>
                        </div>
                        <p className="com_title">Projects</p>

                    <ul class="header__nav-list">
                        <li><a href="#greek" className="com_p" >CREEK RISE</a></li>
                        <li><a href="#cove" className="com_p">THE COVE</a></li>
                        <li><a href="#gate" className="com_p">CREEK GATE</a></li>
                    </ul>
                    </div>
                <div className="community_right ">
                    <div className="community_rfirst" id="greek">
                        <div className="com_first position-relative">
                    <img src={com1} alt="" className='w-100' />
                    <div className="com_text position-absolute">
                        <p className="com_title" >CREEK RISE</p>
                        <p className="com_texts">At Dubai Creek Harbour, you will experience more of what really matters. More laughs shared with friends. More memories made. A thriving community to live, work, play, and capture moments to behold and cherish. A home where every view is a view to live for.</p>
                    </div>
                </div>
                <h3 className="units_title">AVAILABLE UNITS</h3>
                <div className="slider">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid1} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_right">
                                    <h4 className="slider_title">creek rise</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                            <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 1-3</p>
                                    </div>
                                    <p className="slider_text">Creek Rise comprises two beautifully designed residential high-rises with unparalleled views overlooking the Creek Island’s lush parkland, set in a family-oriented neighbourhood.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 2 288 888</span> </p>
                                    <Link to="/popup" href="" className="sale_link">get details</Link>
                                </div>
                                </div>

                            </div>
                            <div class="carousel-item">
                            <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid1} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_right">
                                    <h4 className="slider_title">creek rise</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                        <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 1-3</p>
                                    </div>
                                    <p className="slider_text">Creek Rise comprises two beautifully designed residential high-rises with unparalleled views overlooking the Creek Island’s lush parkland, set in a family-oriented neighbourhood.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 2 288 888</span> </p>
                                    <Link to="/popup" href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid1} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_right">
                                    <h4 className="slider_title">creek rise</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                        <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 1-3</p>
                                    </div>
                                    <p className="slider_text">Creek Rise comprises two beautifully designed residential high-rises with unparalleled views overlooking the Creek Island’s lush parkland, set in a family-oriented neighbourhood.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 2 288 888</span> </p>
                                    <Link to="/popup" href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" >
                                <span class="vector" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                                    <path d="M5.0404 10L1 5.5M1 5.5L5.0404 1M1 5.5L51 5.5" stroke="#071C35"/>
                                    </svg></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                                        <path d="M45.9596 10L50 5.5M50 5.5L45.9596 1M50 5.5L2.44379e-06 5.5" stroke="#071C35"/>
                                        </svg></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                    </div>
                                    </div>
                    </div>
                <div className="community_rthird" id="cove">    
                     <div className="com_first position-relative">
                    <img src={com2} alt="" className='w-100' />
                    <div className="com_text com_cove position-absolute">
                        <p className="com_title">THE COVE</p>
                        <p className="com_texts">Dubai Hills Estate is located in a prestigious area, Mohammed Bin Rashid City. The community features 18-hole championship golf course, 2 mln sq. ft. shopping center with sought after stores, restaurants, cafes, </p>
                    </div>
                </div>
                <h3 className="units_title">AVAILABLE UNITS</h3>
                    <div className="slider">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid2} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_right">
                                    <h4 className="slider_title">PARK FIELD</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                        <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 1-3</p>
                                    </div>
                                    <p className="slider_text">Embrace an urban lifestyle immeresed in nature in the green heart of Dubai. Surrounded by a seamless blend of green open spaces, exceptional amenities, recreational facilities.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 1 247 888</span> </p>
                                    <Link href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                    </div>
                <div class="carousel-item">
                <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid2} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_right">
                                    <h4 className="slider_title">PARK FIELD</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                        <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 1-3</p>
                                    </div>
                                    <p className="slider_text">Embrace an urban lifestyle immeresed in nature in the green heart of Dubai. Surrounded by a seamless blend of green open spaces, exceptional amenities, recreational facilities.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 1 247 888</span> </p>
                                    <Link href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                </div>
                <div class="carousel-item">
                <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid2} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_right">
                                    <h4 className="slider_title">PARK FIELD</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                        <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 1-3</p>
                                    </div>
                                    <p className="slider_text">Embrace an urban lifestyle immeresed in nature in the green heart of Dubai. Surrounded by a seamless blend of green open spaces, exceptional amenities, recreational facilities.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 1 247 888</span> </p>
                                    <Link href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="less" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                        <path d="M5.0404 10L1 5.5M1 5.5L5.0404 1M1 5.5L51 5.5" stroke="#071C35"/>
                        </svg>
                        </span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="less" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                        <path d="M45.9596 10L50 5.5M50 5.5L45.9596 1M50 5.5L2.44379e-06 5.5" stroke="#071C35"/>
                    </svg>
                    </span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                                    </div>

                    </div>
                   
                     <div className="community_rsecond" id="gate">    
                     <div className="com_first position-relative">
                    <img src={com3} alt="" className='w-100' />
                    <div className="com_text position-absolute">
                        <p className="com_title"> creek gate</p>
                        <p className="com_texts">Be part of Dubai’s future. Live in a new community that supports your visions, where you can be an innovator and achieve your ambitions. Say hello to your future at Emaar South.</p>
                    </div>
                </div>
                <h3 className="units_title">AVAILABLE UNITS</h3>
                    <div className="slider">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid3} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_righturb">
                                    <h4 className="slider_title">URBANA</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                            <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 2-3</p>
                                    </div>
                                    <p className="slider_text">The perfect balance of innovation and suburban charm, this delightful community is home to 2 and 3-bedroom tiered and standard townhouses.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 1 138 888</span> </p>
                                    <Link href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                    </div>
                <div class="carousel-item">
                <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid3} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_righturb">
                                    <h4 className="slider_title">URBANA</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                            <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 2-3</p>
                                    </div>
                                    <p className="slider_text">The perfect balance of innovation and suburban charm, this delightful community is home to 2 and 3-bedroom tiered and standard townhouses.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 1 138 888</span> </p>
                                    <Link href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                </div>
                <div class="carousel-item">
                <div className="slider_all">
                                <div className="comslider_left">
                                    <img src={slid3} class="d-block " alt="..." className='slidimg'/>
                                </div>
                                <div className="comslider_righturb">
                                    <h4 className="slider_title">URBANA</h4>
                                    <div className="slidbad">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                        <g clip-path="url(#clip0_82_1050)">
                                            <path d={teg} fill="#071C35"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_82_1050">
                                                    <rect width="21" height="15" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        <p className="slidbadtext">bedrooms 2-3</p>
                                    </div>
                                    <p className="slider_text">The perfect balance of innovation and suburban charm, this delightful community is home to 2 and 3-bedroom tiered and standard townhouses.</p>
                                    <p className="slider_p">FROM <span className="slider_span">AED 1 138 888</span> </p>
                                    <Link href="" className="sale_link">get details</Link>
                                </div>
                                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                <path d="M5.0404 10L1 5.5M1 5.5L5.0404 1M1 5.5L51 5.5" stroke="#071C35"/>
                </svg></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                <path d="M45.9596 10L50 5.5M50 5.5L45.9596 1M50 5.5L3.8147e-06 5.5" stroke="#071C35"/>
                </svg></span>
                <span class="visually-hidden">Next</span>
            </button>
                </div>
                                    </div>

                    </div>
                                    </div>
            </div>
            </div>

            </div>
  )
}

export default Community