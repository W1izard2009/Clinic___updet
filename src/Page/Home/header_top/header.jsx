import React from "react";
import "./header_top.css";
import nav from "./img/place.png";
import tel from "./img/call.png";
import fac from "./img/div.png";
import twi from "./img/div (1).png";
import ink from "./img/div (2).png";

function Header() {
  return (
    <div className="header_top">
      <div className="container">
        <div className="header_text">
          <div className="place">
            <li>
              <img src={nav} alt="" />
            </li>
            <li>
              250 Dundas Street West Suite 305, Mississauga, ON L5B 1J2
            </li>
          </div>
          <ul className="top__navi">
            <div className="tel">
              <li><img src={tel} alt="" />
              </li>
              <li>
              (97)234 34 07
              </li>
            </div>
            <li className="top__navi__img"><img src={fac} alt="" /></li>
            <li className="top__navi__img"><img src={twi} alt="" /></li>
            <li className="top__navi__img"><img src={ink} alt="" /></li>
          </ul>



        </div>
      </div>
    </div>
  );
}

export default Header;
