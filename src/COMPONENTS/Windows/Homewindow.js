import React from "react";
import "./windows.css";
import graphic_001 from "./5483080_2842680.jpg";

import ashu from "./CFC.jpg";
export default function Homewindow() {
  return (
    <>
      <div className="wind_001">
        <div className="content_box_0101">
          <h2>Code For Community</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            accusantium. Officia necessitatibus, amet rerum, ratione quaerat
            suscipit sequi ducimus, consectetur incidunt consequuntur iusto
            aperiam sit aliquam mollitia quod expedita ipsum! Quisquam, esse
          
          </p>
          <button id="about_community_btn">ABOUT COMMUNITY</button>
        </div>
        <div id="graphic_001">
          <img src={graphic_001} width="100%" alt="" />
        </div>
      </div>
    </>
  );
}
