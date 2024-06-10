import logo from "./img/Asset 1 1.png";
import "./headers.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { notification } from "../../../services/Notification";

function Headers() {
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  function Submit() {
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Date", date);
    formData.append("Department", department);
    formData.append("Doctor", doctor);

    fetch(
      "https://script.google.com/macros/s/AKfycbyA1jBi8eiViU2epwmY87pCfP2LtmULoQL4-cpJQLm_DnCFonk9oeLhNt96t1LXP3n0zg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.success) {
          notification(data.message);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [active, setActive] = useState("inner");
  const fnOpen = () => {
    if (active === "inner") {
      setActive("inner nav__active");
    } else setActive("inner");
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header__text">
            <nav>
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className={active}>
                <div className="close">
                  <i class="bi bi-x-lg" onClick={fnOpen}></i>
                </div>
                <li>
                  <Link to={"/xizmatlar"} onClick={fnOpen}>
                    Xizmatlar
                  </Link>
                </li>
                <li>
                  <Link to={"/foot"} onClick={fnOpen}>
                    Muammolar
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={fnOpen}>
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link to={"/faq"} onClick={fnOpen}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to={"/cantact"} onClick={fnOpen}>
                    Aloqa
                  </Link>
                </li>
                <button
                  className="btn btn-primary uchrashuv__buton"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Uchrashuv brom qilish
                </button>

                <div
                  className="offcanvas offcanvas-end"
                  style={{ width: "777px", background: "#3585F9" }}
                  id="offcanvasRight"
                >
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <h3 className="offcanvas__h3">
                      Sign up for an appointment
                    </h3>
                    <p className="offcanvas__p">
                      It just takes few minutes to sign up and get fast,
                      <br></br>
                      easy access to care, 24/7. No need for your<br></br>
                      insurance card yet
                    </p>
                    <div className="buuttons">
                      <div
                        className="btn-group"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "20px",
                        }}
                      >
                        <div
                          className="slelect"
                          style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "-20px",
                            marginLeft: "-20px",
                          }}
                        ></div>
                      </div>

                      <div className="form-inputs">
                        <div className="header__select">
                          <select
                            className="custom-select"
                            onChange={(e) => setDepartment(e.target.value)}
                          >
                            <option value="Choose a department" name="Select">
                              Choose a department
                            </option>
                            <option value="Clinic" name="Select">
                              Clinic
                            </option>
                            <option value="Clinic" name="Select">
                              Clinic
                            </option>
                          </select>
                          <select
                            className="custom-select"
                            onChange={(e) => setDoctor(e.target.value)}
                          >
                            <option value="Choose a doctor" name="Select">
                              Choose a doctor
                            </option>
                            <option value="Clinic" name="Select">
                              Clinic
                            </option>
                            <option value="Clinic" name="Select">
                              Clinic
                            </option>
                          </select>
                        </div>
                        <div className="row date__wri">
                          <div className="col-3">
                            <input
                              placeholder="Your Name"
                              name="Name"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                          </div>
                          <div className="col-3 formdata__col data__col">
                            <input
                              placeholder="Your Email"
                              name="Email"
                              type="text"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="row date__wri">
                          <div className="col-3">
                            <input
                              placeholder="PHONE"
                              name="Phone"
                              type="number"
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                            />
                          </div>
                          <div className="col-3 formdata__col data__col">
                            <input
                              placeholder="08/27/2022"
                              name="Date"
                              type="date"
                              onChange={(e) => setDate(e.target.value)}
                              value={date}
                            />
                          </div>
                        </div>
                        <button
                          name="Name"
                          className="make__button"
                          type="submit"
                          onClick={Submit}
                        >
                          MAKE AN APPOINTMENT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
              <div className="burger__button">
                <i class="bi bi-list" onClick={fnOpen}></i>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Headers;
