import React, { useEffect, useState } from "react";
import  "./css/TopNav.css";
import logo from "../Images/MONKHOOD.png";

export default function TopNav() {

  const [hamburger,setHamburger]=useState(false);

  return (
<div className="TopNav">

  <div className="topNav_bar_Main" >
     <div className="topNav_bar">
       <img src={logo} />

       <div className="TopNav_Elements">
         <div>Service</div>
         <div>List Your Property</div>
         <div>Rent a Property</div>
         <div>About Us</div>
       </div>

       <div className="TopNav_hamburger" onClick={()=>{setHamburger(!hamburger)}}>
          <div></div>
          <div></div>
          <div></div>
       </div>

     </div>

   {
    hamburger &&
    <div className="hamburger_box">
       <div>Service</div>
       <div>List Your Property</div>
       <div>Rent a Property</div>
       <div>About Us</div>
    </div>

  }
  </div>

</div>

  );}
