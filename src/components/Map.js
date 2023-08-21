import React from 'react'
import map from "../images/map.jpg"
import maps from "../images/mapsf.png"
import "./maphover"
import "./Body.css"

const Map = () => {
  return (
    <div>
        <div className="map_all position-relative">
            <img src={map} alt="" className="image_first" />
                <div class="map_text ">
        <p class="map_title position-absolute">choose the best location for you</p>
        <div class="maplocationv position-absolute" id="block">
        <div class="alls" >
        <p class="maps_loctext">EMAAR SOUTH</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='circle ' >
      <circle cx="20" cy="20" r="17.5" fill="white" stroke="#071C35" stroke-width="5"/>
      <circle cx="20" cy="20" r="10" fill="#071C35"/>
      </svg>  
        </div>
        </div>
    <div class="maps_location position-absolute" id="alldiv" >
        <div class="imgbl">
             <img src={maps} alt="" class="img" />
        </div>
        <div class="alls" >
        <p class="maps_loctext">EMAAR SOUTH</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='circle ' >
      <circle cx="20" cy="20" r="17.5" fill="white" stroke="#071C35" stroke-width="5"/>
      <circle cx="20" cy="20" r="10" fill="#071C35"/>
      </svg>  
        </div>
      </div>
      
      </div>
      <div class="maplocationsec position-absolute" id="blocksec">
        <div class="alls" >
        <p class="maps_loctext">DUBAI HILLS ESTATE</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='circle ' >
      <circle cx="20" cy="20" r="17.5" fill="white" stroke="#071C35" stroke-width="5"/>
      <circle cx="20" cy="20" r="10" fill="#071C35"/>
      </svg>  
        </div>
        </div>
    <div class="maps_locationsec position-absolute" id="alldivsec">
        <div class="imgbl">
             <img src={maps} alt="" class="img" />
        </div>
        <div class="alls" >
        <p class="maps_loctext">DUBAI HILLS ESTATE</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='circle ' >
      <circle cx="20" cy="20" r="17.5" fill="white" stroke="#071C35" stroke-width="5"/>
      <circle cx="20" cy="20" r="10" fill="#071C35"/>
      </svg>  
        </div>
      </div>

      <div class="mapslocationthird position-absolute" id="blockthird">
        <div class="alls" >
        <p class="maps_loctext">DUBAI CREEK HARBOUR</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='circle ' >
      <circle cx="20" cy="20" r="17.5" fill="white" stroke="#071C35" stroke-width="5"/>
      <circle cx="20" cy="20" r="10" fill="#071C35"/>
      </svg>  
        </div>
        </div>
    <div class="maps_locationthird position-absolute" id="alldivthird" >
        <div class="imgbl">
             <img src={maps} alt="" class="img" />
        </div>
        <div class="alls" >
        <p class="maps_loctext">DUBAI CREEK HARBOUR</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='circle ' >
      <circle cx="20" cy="20" r="17.5" fill="white" stroke="#071C35" stroke-width="5"/>
      <circle cx="20" cy="20" r="10" fill="#071C35"/>
      </svg>  
        </div>
      </div>

      </div>
    </div>
  )
}

export default Map