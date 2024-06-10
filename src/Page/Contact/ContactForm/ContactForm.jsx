import React from "react";
import "./ContactForm.css";

function Contactform() {
  return (
    <div className="send__gmail_code">
      <div className="container">
        <div className="form form__send__gamil">
          <form action="https://formsubmit.co/kodirovmy122109@gmail.com" method="POST">
            <div className="send__name__email">
              <input type="text" style={{ marginLeft: "5px" }} name="name" required="" placeholder="Name" />
              <input type="text" name="email" required="" placeholder="Email" />
            </div>
            <div className="textarea">
              <textarea name="message" required="" defaultValue={""} />
            </div>
            <input type="hidden" name="_captcha" defaultValue="false" />
            <input
              type="hidden"
              name="_next"
              defaultValue="https://clinic-website-sigma.vercel.app/sucsse.html"
            />
            <input type="hidden" name="_template" defaultValue="box" />
            <button type="submit" onclick="fn()" className="send__button">
              Submit
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contactform
