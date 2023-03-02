import React from "react";
import './index.css';
import jisoo from  '../assets/images/1.jpg';
import jennie from '../assets/images/2.jpg';
import lisa from  '../assets/images/3.jpg';
import rose from  '../assets/images/4.jpg';
import backvideo from '../assets/images/pinkVenom.mp4';

function Blackpink_home() {
    return (
      <div className="Blackpink">
        <video autoPlay muted loop className="Blackpink_backVideo">
          <source src={backvideo}></source>
        </video>
        <div className="Blackpink_coating"></div>
        <div className="Blackpink_member">
          <div><img src={jisoo} alt="jisoo"/></div>
          <div><img src={jennie} alt="jennie" /></div>
          <div><img src={lisa} alt="lisa" /></div>
          <div><img src={rose} alt="rose" /></div>
        </div>
      </div>
    );
  }
  
  export default Blackpink_home;