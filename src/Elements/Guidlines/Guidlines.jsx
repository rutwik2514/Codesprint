import React, { Component } from "react";
import Guidlinelogo from "../../Assets/Guidelines.svg";
export class Guidline extends Component {
  render() {
    return (
      <>
        <section id="guidelines">
          <div className="mt-5">
            <img src={Guidlinelogo} alt="" style={{ padding: "1.4rem" }} />

            <ul className="text-light ps-5">
              <li className="bullets-guideline">
                Participants should avoid plagiarism, Contestant will be disqualified is found doing so.
              </li>
              <li className="bullets-guideline">Participants</li>
              <li className="bullets-guideline">
                The time limit will not be exceeded once it's confirm by managing team.
              </li>
              <li className="bullets-guideline">
                Github repository links are must and with the proper header name, with no violation of the time.
              </li>
              <li className="bullets-guideline">
                Topic selected must be unique & ensure the proper use of resources 
              </li>
              {/* <li className="bullets-guideline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, enim.
              </li>
              <li className="bullets-guideline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, perferendis.
              </li> */}
            </ul>
          </div>
          {/* <hr style={{color:"#FBBC04"}}/> */}
        </section>
      </>
    );
  }
}

export default Guidline;
