import React from 'react'
import women from "../images/women.png"
import logo from "../images/logo.png"
import "./Footer.css"
const telegram = "M18.572 0.0126093C18.2396 -0.0226408 17.8784 0.0292655 17.5154 0.172766C17.0654 0.349766 10.0142 3.31592 3.44116 6.08292L1.26929 6.99698C0.428287 7.33798 0.00366211 7.89256 0.00366211 8.63956C0.00366211 9.16256 0.225006 9.87195 1.28101 10.29L4.94702 11.7587C5.26402 12.7097 6.0003 14.9178 6.1853 15.5048C6.2953 15.8528 6.57315 16.7295 7.27515 16.9345C7.41915 16.9835 7.56941 17.0087 7.72241 17.0087C8.16541 17.0087 8.48438 16.8025 8.64038 16.6825L10.9705 14.7118L13.8005 17.329C13.9095 17.44 14.4865 18.0009 15.2615 18.0009C16.2285 18.0009 16.962 17.1959 17.115 16.4169C17.198 15.9899 19.9275 2.28795 19.9275 2.28995C20.1725 1.19095 19.732 0.620844 19.449 0.377844C19.2065 0.170344 18.9044 0.0478593 18.572 0.0126093ZM17.9099 2.17277C17.5329 4.06277 15.4778 14.3791 15.1658 15.8661L11.0291 12.04L8.22241 14.4169L8.99976 11.3759C8.99976 11.3759 14.3623 5.94775 14.6853 5.63175C14.9453 5.37875 14.9998 5.29006 14.9998 5.20206C14.9998 5.08506 14.9395 5.00089 14.8005 5.00089C14.6755 5.00089 14.5058 5.12067 14.4158 5.17667C13.2724 5.88949 8.40385 8.66313 6.00757 10.0263L2.53101 8.63761L4.21851 7.92863C8.51751 6.11863 16.1739 2.89477 17.9099 2.17277Z"
const whatsapp = "M9.47416 0.0122977C8.35688 0.126644 7.5044 0.323622 6.62572 0.670562C5.39775 1.15544 4.39909 1.79931 3.43473 2.72801C1.59448 4.50013 0.585274 6.73408 0.478157 9.2726C0.409058 10.9109 0.823768 12.6924 1.6099 14.1338C1.70423 14.3069 1.78143 14.4718 1.78139 14.5003C1.78139 14.5289 1.40644 15.6519 0.94817 16.9959C0.489938 18.3399 0.11499 19.4697 0.11499 19.5064C0.11499 19.5872 0.271325 19.741 0.353368 19.741C0.385806 19.741 1.56495 19.3765 2.97363 18.9309C4.38231 18.4853 5.55978 18.1207 5.59021 18.1207C5.62063 18.1207 5.84428 18.2147 6.08719 18.3296C6.88196 18.7054 7.8714 19.0006 8.83472 19.1493C9.46114 19.246 10.9597 19.2466 11.5863 19.1504C13.715 18.8236 15.6209 17.8753 17.1098 16.4021C18.0221 15.4995 18.7575 14.4053 19.2347 13.2406C19.5396 12.4964 19.7365 11.7614 19.8857 10.8102C19.9514 10.3914 19.9515 8.9029 19.8859 8.43761C19.56 6.12613 18.5248 4.12847 16.8534 2.58588C15.392 1.23711 13.62 0.396112 11.5863 0.0860207C11.1966 0.0266107 9.80811 -0.0218433 9.47416 0.0122977ZM11.4215 2.08981C13.6999 2.4703 15.6668 3.79508 16.8511 5.74686C17.3458 6.56221 17.7377 7.67419 17.8672 8.6305C17.9287 9.08449 17.9296 10.1591 17.8688 10.598C17.766 11.3393 17.4565 12.3396 17.1281 12.9917C16.372 14.4929 15.014 15.8074 13.5007 16.5029C12.4906 16.9672 11.5919 17.1811 10.4818 17.2215C8.95691 17.277 7.53451 16.9151 6.24267 16.1431C6.05398 16.0303 5.8752 15.9507 5.81638 15.9532C5.76061 15.9556 5.14821 16.1377 4.45548 16.3578C3.76274 16.578 3.19155 16.755 3.18616 16.7513C3.18073 16.7476 3.35951 16.2025 3.58339 15.54C3.80723 14.8776 3.99016 14.2888 3.98981 14.2317C3.98942 14.1693 3.88738 13.9742 3.73376 13.7421C3.02924 12.678 2.60837 11.4181 2.51989 10.1085C2.48312 9.5636 2.51524 8.82671 2.59535 8.37975C3.03405 5.93131 4.56294 3.90036 6.80011 2.79413C7.63419 2.38173 8.47105 2.14729 9.57105 2.01786C9.85268 1.98472 11.0774 2.03236 11.4215 2.08981ZM7.18766 5.13787C6.58557 5.23246 6.31538 5.34422 6.032 5.61593C5.34051 6.27889 5.14174 7.586 5.56304 8.70018C5.96368 9.7598 7.30911 11.503 8.4247 12.408C9.50819 13.287 10.7474 13.8695 12.1676 14.1674C12.5444 14.2464 13.2377 14.246 13.5398 14.1666C14.1177 14.0147 14.8133 13.5165 15.039 13.0928C15.2441 12.7078 15.3389 11.888 15.2076 11.6352C15.1571 11.5382 14.9986 11.4468 14.2484 11.0823C13.7541 10.8422 13.2333 10.6002 13.0911 10.5447C12.6164 10.3592 12.4981 10.4033 12.0813 10.9207C11.5839 11.5382 11.495 11.6396 11.4521 11.6391C11.43 11.6389 11.2762 11.5797 11.1104 11.5076C10.4769 11.2323 9.59178 10.552 8.95861 9.8538C8.68815 9.5556 8.2534 8.98604 8.2534 8.92995C8.2534 8.9112 8.3718 8.7597 8.5165 8.59328C8.8837 8.171 9.00764 7.93467 9.00287 7.66605C8.99969 7.48689 8.9347 7.30369 8.5856 6.48942C8.35815 5.95897 8.12613 5.45865 8.06998 5.37759C7.89167 5.12035 7.67457 5.06137 7.18766 5.13787Z"

const Footer = () => {

  return (
    <div>
        <div className="footer_all">
            <div className="footer_top">
                <h2 className="footer_top-title">SPEAK TO A SPECIALIST</h2>
                <hr className="footer_top-hr" />
                <div className="footer_top-flex">
                  <div className="footer_toprel ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="24.9998" cy="25.001" r="25" fill="#85DF99"/>
                    </svg>
                    <p className="footer_topf-p">We are Online</p>
                  </div>
                  <p className="footer_top-text">Contact us below to get limited availability, payment plan and to book a unit.</p>
                </div>
                <div className="footer_top-form">
                  <div class="form">
                    <input type="text" name="name" required/>
                    <label for="name" class="label-name">
                    <span class="content-name">Your name</span>
                    </label>
                  </div>
                  <div class="form">
                    <input type="text" name="name" required/>
                    <label for="name" class="label-name">
                    <span class="content-name">Your email</span>
                    </label>
                  </div>
                  <div class="form">
                    <input type="text" name="name" required/>
                    <label for="name" class="label-name">
                    <span class="content-name">Phone number</span>
                    </label>
                  </div>
                  <div class="">
                  <p className="form_link">request a call</p>
                  </div>
                </div>
            </div>

        </div>            
        <div className="footer_bottom position-relative">
          <div>
           <img src={women} alt="" className=" imagewom position-absolute" /> 
          </div>
          <div className="footer_bottomright">
            <div className="footer_bottom-left">
              <div className="footer_line">
                <p className="footer_line-p">top projects</p>
                <p className="footer_line-p">community</p>
                <p className="footer_line-p">payment option</p>
              </div>
              <div className="footer_secondline">
                <p className="footer_line-text">971 56XXX-XX-XX</p>
                <p className="footer_line-text show"> SHOW</p>
                <p className="footer_secondline-text tele">telegram 
                <span className='teleg_icon'>
                <svg xmlns="http://www.w3.org/2000/svg" idth="20" height="18" viewBox="0 0 20 18" fill="none"> 
                <g clip-path="url(#clip0_82_689)">
                  <path d={telegram}fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_82_689">
                    <rect width="20" height="18" fill="white" transform="translate(-0.000244141 0.000976562)"/>
                  </clipPath>
                </defs>
                </svg>
                  </span>
                </p>
                <p className="footer_secondline-text">whatsapp 
                <span className='teleg_icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_82_693)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d={whatsapp} fill="white"/>
                  </g>
                <defs>
                <clipPath id="clip0_82_693">
                  <rect width="20" height="20" fill="white"transform="translate(-0.000244141 0.000976562)"/>
                </clipPath>
                  </defs>
                </svg>
                  </span>
                </p>
              </div>
            </div>
            <div className="footer_bottom-right">
              <img src={logo} alt="" className="bottom_icon" />
            </div>
          </div>
          </div>
    </div>
  )
}

export default Footer