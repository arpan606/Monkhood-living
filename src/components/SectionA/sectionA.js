import React, { useEffect, useState } from "react";
import './sectionA.css';

import what from "../Images/what@4x.png";
import where from "../Images/where-2@4x.png";
import why  from "../Images/why@4x (1).png";
import who  from "../Images/who copy 2@4x.png";

function SectionA() {
  return (
    <div className="sectionA">
       <div className="sectionA_a"> <img src={what}/> <div>What?</div>  </div>
       <div className="sectionA_a"> <img src={why}/> <div>Why?</div>  </div>
       <div className="sectionA_a"> <img src={who}/> <div>Who?</div>  </div>
       <div className="sectionA_a"> <img src={where}/> <div>Where?</div>  </div>
    </div>
  );
}

export default SectionA;
