import React from "react";
import milestones from "../../Assets/Milestones.svg";
import "../Milestones/Milestones.css"
export default function Milestones() {
  return (
    <>
      <div className="my-5" id="rewards">
        <img src={milestones} alt="" style={{ padding: "1.4rem" }} id="rewardslogo"/>
        {/* <h1 className="text-light">Rewards</h1> */}
        <ul className="text-light my-2 ps-5">
          <li className="bullets-guideline">
            Schwags for top 3 participants in each session (like t-shirts, bags,
            hoodies, bottles, etc).
          </li>
          <li className="bullets-guideline">
            Internship opportunities in emerging startups.
          </li>
          <li className="bullets-guideline">
            Complete full-stack development skills which is in demand for
            current scenario.
          </li>
        </ul>
      </div>
    </>
  );
}
