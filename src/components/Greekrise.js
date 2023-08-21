import React from 'react'
import "./Greekrise.css"
import { Link } from 'react-router-dom'
import bg from "../images/popupbg.png"
import gallery1 from "../images/gallery1.png"
import gallery2 from "../images/gallery2.png"
import gallery3 from "../images/gallery3.png"
import floor from "../images/floor.png"
const badroom = "M2.08301 19.7918V13.1512C2.08301 12.7172 2.16981 12.3092 2.34342 11.9272C2.51704 11.5453 2.77745 11.2328 3.12467 10.9897V7.96891C3.12467 7.18766 3.38943 6.53228 3.91895 6.00277C4.44846 5.47325 5.10384 5.2085 5.88509 5.2085H10.5726C10.9545 5.2085 11.3104 5.2953 11.6403 5.46891C11.9702 5.64252 12.2566 5.8769 12.4997 6.17204C12.7427 5.8769 13.0248 5.64252 13.346 5.46891C13.6672 5.2953 14.0188 5.2085 14.4007 5.2085H19.0882C19.8695 5.2085 20.5292 5.47325 21.0674 6.00277C21.6056 6.53228 21.8747 7.18766 21.8747 7.96891V10.9897C22.2219 11.2328 22.4823 11.5453 22.6559 11.9272C22.8295 12.3092 22.9163 12.7172 22.9163 13.1512V19.7918H21.3538V17.7085H3.64551V19.7918H2.08301ZM13.2809 10.547H20.3122V7.96891C20.3122 7.62169 20.195 7.33523 19.9606 7.10954C19.7262 6.88384 19.4354 6.771 19.0882 6.771H14.3226C14.0275 6.771 13.7801 6.89252 13.5804 7.13558C13.3808 7.37863 13.2809 7.65641 13.2809 7.96891V10.547ZM4.68717 10.547H11.7184V7.96891C11.7184 7.65641 11.6186 7.37863 11.4189 7.13558C11.2193 6.89252 10.9719 6.771 10.6768 6.771H5.88509C5.55523 6.771 5.27311 6.88818 5.03874 7.12256C4.80436 7.35693 4.68717 7.63905 4.68717 7.96891V10.547ZM3.64551 16.146H21.3538V13.1512C21.3538 12.8561 21.254 12.6087 21.0544 12.409C20.8547 12.2094 20.6073 12.1095 20.3122 12.1095H4.68717C4.39204 12.1095 4.14464 12.2094 3.94499 12.409C3.74533 12.6087 3.64551 12.8561 3.64551 13.1512V16.146ZM21.3538 16.146H3.64551H21.3538Z"
const bathroom = "M7.10905 9.4012C6.58822 9.4012 6.14117 9.21457 5.7679 8.84131C5.39464 8.46805 5.20801 8.021 5.20801 7.50016C5.20801 6.97933 5.39464 6.53228 5.7679 6.15902C6.14117 5.78575 6.58822 5.59912 7.10905 5.59912C7.62988 5.59912 8.07693 5.78575 8.4502 6.15902C8.82346 6.53228 9.01009 6.97933 9.01009 7.50016C9.01009 8.021 8.82346 8.46805 8.4502 8.84131C8.07693 9.21457 7.62988 9.4012 7.10905 9.4012ZM4.84342 22.9168C4.51356 22.9168 4.23145 22.83 3.99707 22.6564C3.7627 22.4828 3.64551 22.2224 3.64551 21.8752C3.22884 21.8752 2.86426 21.7189 2.55176 21.4064C2.23926 21.0939 2.08301 20.7293 2.08301 20.3127V13.5418H5.20801V12.8127C5.20801 12.205 5.42502 11.6842 5.85905 11.2502C6.29308 10.8161 6.81391 10.5991 7.42155 10.5991C7.75141 10.5991 8.06391 10.6599 8.35905 10.7814C8.65419 10.9029 8.91461 11.0852 9.1403 11.3283L10.4945 12.8647C10.616 13.0036 10.7419 13.1295 10.8721 13.2424C11.0023 13.3552 11.1368 13.455 11.2757 13.5418H18.7497V4.84391C18.7497 4.51405 18.6412 4.23193 18.4242 3.99756C18.2071 3.76318 17.9337 3.646 17.6038 3.646C17.4302 3.646 17.2653 3.66336 17.109 3.69808C16.9528 3.7328 16.8139 3.81093 16.6924 3.93245L15.3382 5.28662C15.425 5.58176 15.438 5.88124 15.3773 6.18506C15.3165 6.48888 15.208 6.77968 15.0518 7.05746L12.3955 4.53141C12.6733 4.34044 12.9771 4.21891 13.307 4.16683C13.6368 4.11475 13.958 4.14947 14.2705 4.271L15.6247 2.94287C15.8851 2.68245 16.1846 2.47412 16.5231 2.31787C16.8617 2.16162 17.2219 2.0835 17.6038 2.0835C18.3677 2.0835 19.0101 2.35259 19.5309 2.89079C20.0518 3.42898 20.3122 4.08002 20.3122 4.84391V13.5418H22.9163V20.3127C22.9163 20.7293 22.7558 21.0939 22.4346 21.4064C22.1134 21.7189 21.7531 21.8752 21.3538 21.8752C21.3538 22.2224 21.2367 22.4828 21.0023 22.6564C20.7679 22.83 20.4771 22.9168 20.1299 22.9168H4.84342ZM3.64551 20.3127H21.3538V15.1043H3.64551V20.3127ZM21.3538 20.3127H3.64551H21.3538Z"
 const area = "M3.64551 18.75C3.22884 18.75 2.86426 18.5937 2.55176 18.2812C2.23926 17.9687 2.08301 17.6042 2.08301 17.1875V7.8125C2.08301 7.41319 2.23926 7.05295 2.55176 6.73177C2.86426 6.41059 3.22884 6.25 3.64551 6.25H21.3538C21.7705 6.25 22.1351 6.41059 22.4476 6.73177C22.7601 7.05295 22.9163 7.41319 22.9163 7.8125V17.1875C22.9163 17.6042 22.7601 17.9687 22.4476 18.2812C22.1351 18.5937 21.7705 18.75 21.3538 18.75H3.64551ZM3.64551 17.1875H21.3538V7.8125H17.9684V12.5H16.4059V7.8125H13.2809V12.5H11.7184V7.8125H8.59342V12.5H7.03092V7.8125H3.64551V17.1875ZM7.03092 12.5H8.59342H7.03092ZM11.7184 12.5H13.2809H11.7184ZM16.4059 12.5H17.9684H16.4059Z"

const Greekrise = () => {
  return (
    <div>
        <div className="greekheader">
            <div className="greek_navbar">
                <p className="navbar_title">creek rise</p>
                <Link to="/" className="navbar_close">
                    <p className="navbar_text">close 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className='svgclose'>
                            <g clip-path="url(#clip0_74_167)">
                                <path d="M1.5751 17.7751L0.225098 16.4251L7.6501 9.0001L0.225098 1.5751L1.5751 0.225098L9.0001 7.6501L16.4251 0.225098L17.7751 1.5751L10.3501 9.0001L17.7751 16.4251L16.4251 17.7751L9.0001 10.3501L1.5751 17.7751Z" fill="#071C35"/>
                            </g>
                        <defs>
                            <clipPath id="clip0_74_167">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </span>
                    </p>
                </Link>
            </div>
            <div className="greek_header">
                <div className="position-relative">
                    <img src={bg} alt="" className='popbg' />
                    <div className="greek_brochure position-absolute">
                        <div className='greek_all'>
                            <div className="d-flex align-items-center ">
                                <p className="greek_brochure-title">type</p>
                                <p className='linegreek firstline'></p>
                            </div>
                        <p className="greek_brochure-text">Apartment</p>  
                        </div>
                        <div className='greek_all'>
                            <div className="d-flex align-items-center ">
                                <p className="greek_brochure-title">bedrooms </p>
                                <p className='linegreek thirdline'></p>
                            </div>
                        <p className="greek_brochure-text">1-3</p>  
                        </div>
                        <div className='greek_all'>
                            <div className="d-flex align-items-center ">
                                <p className="greek_brochure-title">total area from </p>
                                <p className='linegreek seconndline'></p>
                            </div>
                        <p className="greek_brochure-text">1097 sq. ft.</p>  
                        </div>
                        <div className='greek_all alllast'>
                            <div className="d-flex align-items-center ">
                                <p className="greek_brochure-title">price from </p>
                                <p className='linegreek'></p>
                            </div>
                        <p className="greek_brochure-text">AED 2 268 888</p>  
                        </div>
                        <Link to="" href="" className="greek_link">enquer now</Link>
                    </div>
                    <div className="d-flex justify-content-end">
                    <p className="greek_text">Creek Rise comprises two beautifully designed residential high-rises with unparalleled views overlooking the Creek Island’s lush parkland, set in a family-oriented neighbourhood.</p>                        
                    </div>
                </div>
            </div>
            <div className="mapview_all">
                <div className="position-relative maplines">
                    <div className="position-absolute mapabsolute">
                    <div className="mapview_div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="96" viewBox="0 0 54 96" fill="none">
                            <path d="M26.75 95H51.5C43.25 89.3333 26.75 71.9 26.75 47.5M26.75 95H2C10.25 88.3333 26.75 69.5 26.75 47.5M26.75 95V47.5M26.75 0V13.5M26.75 47.5V32.5M26.75 32.5C25.6667 31.8333 23.5 28.9 23.5 22.5C23.5 16.1 25.6667 13.8333 26.75 13.5M26.75 32.5V13.5M26.75 32.5C27.8333 31.8333 30 28.9 30 22.5C30 16.1 27.8333 13.8333 26.75 13.5" stroke="#071C35"/>
                        </svg>
                        <p className="mapview_text">creek tower </p>
                        <p className="min">10min</p>

                    </div>
                        <div className='d-flex align-items-center flex-column-reverse'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#071C35"/>
                    </svg>
                    <p className="linemapview"></p>
                        </div>
                    </div>
                    <div className="position-absolute mapabsolutesecond">
                    <div className="mapview_div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="100" viewBox="0 0 35 100" fill="none">
                        <path d="M1 100V79.3939H5.84848V55.1515H10.697M15.5455 75.1515V55.1515H10.697M10.697 55.1515V35.7576H14.3333V15.1515H17.3636M17.3636 15.1515V0M17.3636 15.1515H20.3939V24.2424M20.3939 29.697V24.2424M20.3939 24.2424H26.4545V45.4545M26.4545 45.4545H22.8182V55.1515M26.4545 45.4545H30.0909V64.8485M30.0909 64.8485H26.4545V83.6364M30.0909 64.8485H34.3333V100" stroke="#071C35" stroke-width="1.17647"/>
                    </svg>
                        <p className="mapview_text">burj halifa </p>
                        <p className="min">20min</p>

                    </div>
                        <div className='d-flex align-items-center flex-column-reverse'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#071C35"/>
                    </svg>
                    <p className="linemapview"></p>
                        </div>
                    </div>
                    <div className="position-absolute mapabsolutethird">
                    <div className="mapview_div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="102" viewBox="0 0 86 102" fill="none">
                        <path d="M35.7059 85.7059C25.1176 83.9412 3.35294 74.0588 1 48.6471M49.8235 85.7059C60.4118 83.9412 82.1765 74.0588 84.5294 48.6471M1 38.6471C2.76471 26.098 13.5882 1 42.7647 1C71.9412 1 83.1569 26.098 85.1176 38.6471M42.7647 61C39.9412 61 38.8431 62.9608 38.6471 63.9412V97.4706C38.6471 100.294 41.3922 101 42.7647 101C46.0588 101 47.2745 98.6471 47.4706 97.4706V63.9412C47.0784 62.9608 45.5882 61 42.7647 61ZM42.7647 61V22.1765M46.2941 56.8824C49.2353 58.0588 57 62.6471 64.5294 71.5882M46.2941 51.5882C50.4118 51.9804 60.7647 55.1176 69.2353 64.5294M46.2941 46.8824C52.5686 46.8824 67 49 74.5294 57.4706M46.2941 43.3529C52.3725 41.1961 66.8823 39.5882 76.2941 50.4118M46.2941 38.6471C51.5882 35.7059 64.7647 31.5882 75.1176 38.6471M46.2941 33.9412C48.8431 31.9804 56.8823 28.0588 68.6471 28.0588M46.2941 28.0588C47.6667 26.2941 51.9412 22.1765 58.0588 19.8235M46.2941 22.1765C46.8824 21 48.8824 18.1765 52.1765 16.2941M40.4118 56.8824C37.8627 57.8627 30.6471 62.1765 22.1765 71.5882M40.4118 51.5882C35.7059 52.1765 24.4118 55.5882 16.8824 64.5294M40.4118 46.8824C33.7451 46.6863 18.5294 48.5294 11 57.4706M40.4118 43.3529C34.3333 41.1961 19.4706 39.5882 8.64706 50.4118M40.4118 38.6471C34.5294 35.902 20.4118 32.0588 11 38.6471M40.4118 33.9412C36.6863 31.5882 26.7647 27.1176 16.8824 28.0588M40.4118 28.0588C37.4706 25.7059 30.7647 20.7647 27.4706 19.8235M40.4118 22.1765C39.2353 20.6078 36.2941 17.2353 33.9412 16.2941M42.7647 64.5294V97.4706" stroke="#071C35" stroke-width="1.17647"/>
                    </svg>
                        <p className="mapview_text">Palm Jumeirah  </p>
                        <p className="min">35min</p>

                    </div>
                        <div className='d-flex align-items-center flex-column-reverse'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#071C35"/>
                    </svg>
                    <p className="linemapview"></p>
                        </div>
                    </div>
                    <div className="position-absolute mapabsolutlower">
                    <div className='d-flex align-items-center flex-column'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#071C35"/>
                    </svg>
                    <p className="linemapview"></p>
                        </div>
                    <div className="mapview_div lower">
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="64" viewBox="0 0 66 64" fill="none">
                        <path d="M17.5557 40.2112L30.1166 27.6768M17.5557 40.2112L6.13833 37.3626L1 41.9204L15.3808 49.3267M17.5557 40.2112L15.3808 49.3267M37.5392 34.1417L52.3833 58.4422L56.9507 54.4542L52.3833 19.5535M37.5392 34.1417L52.3833 19.5535M37.5392 34.1417L26.146 45.3387M52.3833 19.5535L62.0879 10.0161C63.6104 7.73719 66.1986 2.83761 64.3716 1.47028C62.5447 0.102957 57.1399 2.04 54.6659 3.17944L42.6776 15.1424M42.6776 15.1424L11.8476 7.73719L7.85111 12.2949L30.1166 27.6768M42.6776 15.1424L30.1166 27.6768M15.3808 49.3267L14.7011 52.1753L17.5557 50.6673M17.5557 50.6673L24.4068 47.0478L26.146 45.3387M17.5557 50.6673L22.1242 63L26.6916 60.7211L26.146 45.3387" stroke="#071C35"/>
                    </svg>
                        <p className="mapview_text airport">Airport </p>
                        <p className="min">15min</p>
                    </div>
                    </div>

                    <div className="position-absolute maplower">
                    <div className='d-flex align-items-center flex-column'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#071C35"/>
                    </svg>
                    <p className="linemapview"></p>
                        </div>
                    <div className="mapview_div burj">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="101" viewBox="0 0 40 101" fill="none">
                        <path d="M25.8485 100H34.3333C37.7273 91.7576 38.5758 77.9798 38.5758 72.1212C38.5758 40.1212 18.7778 22.0202 8.87879 16.9697M25.8485 100C28.7576 93.2121 29.8889 78.5859 30.0909 72.1212C30.0909 49.3502 18.5945 33.0219 8.87879 24.1321M25.8485 100H8.87879M8.87879 24.1321C5.97542 21.4755 3.23105 19.4833 1 18.1818V39.3939M8.87879 24.1321V16.9697M8.87879 0V16.9697M8.87879 100H1V91.5152M8.87879 100V83.0303M8.87879 29.697V39.3939M8.87879 39.3939H1M8.87879 39.3939V62.4242M1 39.3939V50.9091M8.87879 62.4242H1M8.87879 62.4242V83.0303M1 62.4242V72.7273M1 62.4242V50.9091M8.87879 83.0303H1M1 83.0303V91.5152M1 83.0303V72.7273M1 91.5152H5.24242M1 72.7273H5.24242M1 50.9091H5.24242M13.7273 35.7576V96.3636H21.6061C23.0202 93.7374 25.8485 85.2121 25.8485 72.1212C25.8485 55.7576 18.5758 41.8182 13.7273 35.7576Z" stroke="#071C35" stroke-width="1.17647"/>
                    </svg>
                        <p className="mapview_text burj">burj al arab  </p>
                        <p className="min">30min</p>

                    </div>
                    </div>
                    
                </div>
                <Link className=" mapviews form_link offer_link">map view</Link>
            </div>
            <div className="gallery_all">
                <h3 className="body_h gallery">gallery</h3>
                <div className="gallery_photos">
                    <div className="gallery_left">
                        <img src={gallery1} alt="" className='gallery_img' />
                    </div>
                    <div className="gallery_right">
                        <img src={gallery2} className='gallery_img' alt="" />
                        <img src={gallery3} className='gallery_img' alt="" />
                    </div>
                </div>
            </div>
            <div className="floor_all">
            <h3 className="body_h floor">floor plans</h3>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='popupslider'>
            <div className="floorslider_left w-50">
                        <h4 className="floorslider_title">Rosewater</h4>
                        <p className="floorslider_text">Penthouse</p>
                        <div className="rooms d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={badroom} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Bedrooms</p>
                        <p className='linegreek roomsline'></p>  
                        </div>
                        <p className="rooms_number">2</p>
                        </div>
                        <div className="rooms d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={bathroom} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Bathrooms</p>
                        <p className='linegreek roomsline seclines'></p>  
                        </div>
                        <p className="rooms_number">1</p>
                        </div>
                        <div className="rooms thirdrooms d-flex align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={area} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Total area</p>
                        <p className='linegreek roomsline thirdlines'></p>  
                        </div>
                        <p className="rooms_number">815 sq. ft.</p>
                        </div>
                        <p className="rooms_cost-all">From <span className="rooms_cost">AED 2 027 888</span></p>
                        <Link className="rooms_link">Book a unit</Link>
                    </div>
                    <div className="floorslider_right w-50">
                    <img src={floor} class="d-block w-100" alt="..."/>
                </div>
            </div>
    </div>
                <div class="carousel-item">
                <div className='popupslider'>
            <div className="floorslider_left w-50">
                        <h4 className="floorslider_title">Rosewater</h4>
                        <p className="floorslider_text">Penthouse</p>
                        <div className="rooms d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={badroom} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Bedrooms</p>
                        <p className='linegreek roomsline'></p>  
                        </div>
                        <p className="rooms_number">2</p>
                        </div>
                        <div className="rooms d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={bathroom} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Bathrooms</p>
                        <p className='linegreek roomsline seclines'></p>  
                        </div>
                        <p className="rooms_number">1</p>
                        </div>
                        <div className="rooms thirdrooms d-flex align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={area} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Total area</p>
                        <p className='linegreek roomsline thirdlines'></p>  
                        </div>
                        <p className="rooms_number">815 sq. ft.</p>
                        </div>
                        <p className="rooms_cost-all">From <span className="rooms_cost">AED 2 027 888</span></p>
                        <Link className="rooms_link">Book a unit</Link>
                    </div>
                    <div className="floorslider_right w-50">
                    <img src={floor} class="d-block w-100" alt="..."/>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div className='popupslider'>
            <div className="floorslider_left w-50">
                        <h4 className="floorslider_title">Rosewater</h4>
                        <p className="floorslider_text">Penthouse</p>
                        <div className="rooms d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={badroom} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Bedrooms</p>
                        <p className='linegreek roomsline'></p>  
                        </div>
                        <p className="rooms_number">2</p>
                        </div>
                        <div className="rooms d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={bathroom} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Bathrooms</p>
                        <p className='linegreek roomsline seclines'></p>  
                        </div>
                        <p className="rooms_number">1</p>
                        </div>
                        <div className="rooms thirdrooms d-flex align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={area} fill="#071C35"/>
                        </svg>
                        <div className="rooms_line">
                        <p className="rooms_p">Total area</p>
                        <p className='linegreek roomsline thirdlines'></p>  
                        </div>
                        <p className="rooms_number">815 sq. ft.</p>
                        </div>
                        <p className="rooms_cost-all">From <span className="rooms_cost">AED 2 027 888</span></p>
                        <Link className="rooms_link">Book a unit</Link>
                    </div>
                    <div className="floorslider_right w-50">
                    <img src={floor} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
            <path d="M5.0404 10L1 5.5M1 5.5L5.0404 1M1 5.5L51 5.5" stroke="#071C35"/>
        </svg></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="11" viewBox="0 0 51 11" fill="none">
                <path d="M45.9596 10L50 5.5M50 5.5L45.9596 1M50 5.5L3.8147e-06 5.5" stroke="#071C35"/>
                </svg>
            </span>
            <span class="visually-hidden">Next</span>
        </button>
                </div>
            </div>
            <div className="payplan_all">
            <h3 className="body_h ">payment plan</h3>
            <div className="payplan_numbers">
                <div className="payplan_left">
                    <p className="payplan_number">20%</p>
                    <p className="payment_text">1st Installment</p>
                </div>
                <div className="payplan_right">
                    <p className="payplan_number">80%</p>
                    <p className="payment_text">On Handover</p>
                </div>
            </div>
            </div>
            <div className="offers_all">
            <h3 className="offer_title ">more unique offers</h3>
            <p className="payment_text offer_text">contact us and our specialists will select the best offer for you</p>
            <div className="offer-form">
                  <div class="form">
                    <input type="text" name="name" required/>
                    <label for="name" class="label-name offer_laber">
                    <span class="content-name">Your name</span>
                    </label>
                  </div>
                  <div class="form">
                    <input type="text" name="name" required/>
                    <label for="name" class="label-name offer_laber">
                    <span class="content-name">Your email</span>
                    </label>
                  </div>
                  <div class="form">
                    <input type="text" name="name" required/>
                    <label for="name" class="label-name offer_laber">
                    <span class="content-name">Phone number</span>
                    </label>
                  </div>
                  <div class="">
                  <p className="form_link offer_link">request a call</p>
                  </div>
                </div>
            </div>
            <div className="offer_footer"></div>
        </div>
    </div>
  )
}

export default Greekrise