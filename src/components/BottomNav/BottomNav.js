import React, { useEffect, useState } from "react";
import './bottomNav.css';
import monkhoodLogo from "../Images/monkhood-logo-icon.png";


function BottomNav() {
  return (
    <div className="bottomNav">

     <div className="bottomNav_A">

      <div className="bot_Nav_a">
         <img className="logoMon"src={monkhoodLogo}/>
         <div></div>
      </div>

      <div className="bot_Nav_b">
        <div className="bot_Nav_b_heading">MONKHOOD</div>
        <hr/>
        <div className="bot_Nav_b_items">
           <div>Services</div>
           <div>About Us</div>
           <div>Contact Us</div>
        </div>
      </div>

      <div className="bot_Nav_b">
        <div className="bot_Nav_b_heading">MORE INFORMATION</div>
        <hr/>
        <div className="bot_Nav_b_items">
           <div>Privacy and Policy</div>
           <div>Terms of Use</div>
        </div>
      </div>

      <div className="bot_Nav_b">
        <div className="bot_Nav_b_heading">SOCIAL HANDLES</div>
        <hr/>
        <div className="bot_Nav_b_items">
           <div>Instagram</div>
           <div>Facebook</div>
           <div>LinkedIn</div>
            <div>Twitter</div>
        </div>
      </div>

    </div>

    <div className="bottomNav_B">2019 © Monkhood Living Pvt. Ltd.</div>

    </div>
  );
}

export default BottomNav;
