import React from "react";
import './index.css';

function Blackpink_infomation(props) {
    return (
      <div className="information">
        <div className="information_header">
            <div className="information_header--img"><img src={props.avatar} alt="avatar" ></img></div>
            <div className="information_header--text">
              <h1>{props.name}</h1>
              <p>{props.title}</p>
            </div>
            <div className="information_header--box"></div>
        </div>

        <div className="information_content">
          <div className="information_content--ts">TIỂU SỬ</div>
          <div className="information_content--tslist">
            <li>{props.biography_1}</li>
            <li>{props.biography_2}</li>
            <li>{props.biography_3}</li>
          </div>
          <div className="information_content--bk">BLACKPINK</div>
          <div className="information_content--bklist">
            <li>{props.blackpink_1}</li>
            <li>{props.blackpink_2}</li>
            <li>{props.blackpink_3}</li>
          </div>
        </div>
        
        <div className="information_footter">
          <div className="information_footter--giaithuong">GIẢI THƯỞNG</div>
          <div className="information_footter--giaithuonglist">
            <li>{props.prize_1}</li>
            <li>{props.prize_2}</li>
            <li>{props.prize_3}</li>
            <li>{props.prize_4}</li>
            <li>{props.prize_5}</li>
          </div>
          <div className="information_footter--chuky">CHỮ KÝ</div>
          <div className="information_footter--chukykimg"><img src={props.signature} alt="Chữ ký" /></div>
        </div> 
      </div>
    );
  }
  
  export default Blackpink_infomation;