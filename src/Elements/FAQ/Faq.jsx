import React from "react";
import Faq from "../../Assets/FAQ.svg";
import "../FAQ/Faq.css"
export default function Ques() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  function handleChange1() {
    setChecked1(!checked1);
  }
  function handleChange2() {
    setChecked2(!checked2);
  }
  function handleChange3() {
    setChecked3(!checked3);
  }

  return (
    <>
      <div className="mt-5 px-3">
        <img src={Faq} alt="" id="faqimg" style={{ padding: "1.0rem" }} />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="faq-cont d-flex flex-column w-75 justify-content-center align-items-center">
          <div className="faq-1 d-flex flex-column w-100 my-1 py-0" id="faq1">
            <div
              className="upper-div d-flex flex-row justify-content-between"
              id="upper-div"
            >
              <div className="ques-div" id="ques-div">
                <p className="fw-bold m-2 text-light" id="q1">
                  What is GDSC India Web Campaign?
                </p>
              </div>
              {!checked1 && (
                <span className="m-2" onClick={handleChange1}>
                  <svg
                    id="plus1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
              )}
              {checked1 && (
                <span className="m-2" onClick={handleChange1}>
                  <svg
                    id="minus1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </span>
              )}
            </div>
            <div className="lower-div py-0">
              {checked1 && (
                <div className="text">
                  <p className="">
                    Web Campaign introduces you to various web technologies. You
                    will learn basics of web technology. React, Angular and many
                    more that will help you to create end to end interactive web
                    applications.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="faq-2 d-flex flex-column w-100 my-1" id="faq2">
            <div className="upper-div d-flex flex-row justify-content-between">
              <div className="ques-div">
                <p className="fw-bold m-2 text-light">
                  What is Devheat Beta ?
                </p>
              </div>
              {!checked2 && (
                <span className="m-2" onClick={handleChange2}>
                  <svg
                    id="plus2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
              )}
              {checked2 && (
                <span className="m-2" onClick={handleChange2}>
                  <svg
                    id="minus2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </span>
              )}
            </div>
            <div className="lower-div py-0">
              {checked2 && (
                <div className="text">
                  <p>
                    DevHeat Beta is a week-long hackathon for newbies, You'll experience the tech stack which will be your companion throughout your career.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="faq-3 d-flex flex-column w-100 my-1" id="faq3">
            <div className="upper-div d-flex flex-row justify-content-between">
              <div className="ques-div">
                <p className="fw-bold m-2 text-light">
                  How to know if I am registered ?
                </p>
              </div>
              {!checked3 && (
                <span className="m-2" onClick={handleChange3}>
                  <svg
                    id="plus3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
              )}
              {checked3 && (
                <span className="m-2" onClick={handleChange3}>
                  <svg
                    id="minus3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </span>
              )}
            </div>
            <div className="lower-div py-0">
              {checked3 && (
                <div className="text">
                  <p>
                    You'll be receiving emails from the GDSC IIIT Surat that will confirm your registrations. 
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
