import React from "react";
import "./start.css";
import aziz from "./img/div (7).png";
import stars from "./img/div (8).png";
import google from "./img/div (10).png";
import start1 from "./img/ACNPEu9NeAFOAOhGp0fYIz6WsChuYlJ4NDqryECbiA5l=s240-c-c0x00000000-cc-rp-mo-ba3-br100.png";
import start2 from "./img/ALm5wu0_uzLMRufKJMprY5raVgjCtELnPR4RcCHesyHL=s240-c-c0x00000000-cc-rp-mo-ba3-br100.png";
import start3 from "./img/ALm5wu2AkbsKoRY-d60mlz6jrUgPa8hMwVq6116MFl7T=s240-c-c0x00000000-cc-rp-mo-br100.png";
function Start() {
  return (
    <div className="card__message">
      <div className="container">
        <div className="card__messega__top">
          <h5>MA'LUMOTNOMALAR</h5>
          <h4>
            Bizning mijozlarimiz<br></br>
            nima deyishadi
          </h4>
        </div>
        <div className="card_starts">
          <div className="card_start">
            <div className="asosiy__start">
              <img src={aziz} alt="" />
              <h4>Rukhsana Aziz</h4>
            </div>
            <div className="starts__img">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h5>7 days ago</h5>
            </div>
            <p>
              Very professional and nice <br />
              people.
            </p>
            <img src={google} alt="" />
          </div>
          <div className="card_start1">
            <div className="asosiy__start">
              <img src={start1} alt="" />
              <h4>Rukhsana Aziz</h4>
            </div>
            <div className="starts__img">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h5>7 days ago</h5>
            </div>
            <p>
              Very professional and nice <br />
              people.
            </p>
            <h6>Read more</h6>

            <img src={google} alt="" />
          </div>
          <div className="card_start1">
            <div className="asosiy__start">
              <img src={start2} alt="" />
              <h4>Rukhsana Aziz</h4>
            </div>
            <div className="starts__img">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h5>7 days ago</h5>
            </div>
            <p>
              Very professional and nice <br />
              people.
            </p>
            <h6>Read more</h6>

            <img src={google} alt="" />
          </div>
          <div className="card_start1">
            <div className="asosiy__start">
              <img src={start3} alt="" />
              <h4>Rukhsana Aziz</h4>
            </div>
            <div className="starts__img">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h5>7 days ago</h5>
            </div>
            <p>
              Very professional and nice <br />
              people.
            </p>
            <h6>Read more</h6>
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
