import React from "react";
import "./feet.css";
function Feet() {
  return (
    <div>
      <div className="cantact__map">
        <div className="container">
          <div className="catact__map__text">
            <h5>General information</h5>
            <h4>
              We’re here for you.
              <br />
              And your feet.
            </h4>
            <p>
              See the full details of clinic hours and contact information
              below. Use the
              <br /> booking buttons located across this site to book your
              appointment today.
            </p>
            <div className="cantact__navigation">
              <div className="navi__1">
                <h5>Location</h5>
                <p>
                  250 Dundas Street West
                  Suite 305
                  Mississauga
                  ON L5B 1J2
                </p>
              </div>
              <div className="navi__2">
                <h5>Business Hours</h5>
                <p>
                  Monday: 9:30 am - 6:30 pm.
                   Tuesday: 9:30 am - 6:30 pm.
                   Wednesday: 9:30 am - 6:30 pm.
                   Thursday: 9:30 am - 6:30 pm.
                   Friday: 9:30 am - 6:30 pm.
                   Saturday: 9:30 am - 5:00 pm.
                   Sunday: Closed.
                </p>
              </div>
              <div className="map__digital">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2137.341519278195!2d72.35927710362063!3d40.74756434689317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1715584234559!5m2!1sru!2s"
                  width="600"
                  height="450"
                  style={{ borderRadius: "20px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feet;
