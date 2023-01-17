import React from "react";
import milestones from "../../Assets/Milestones.svg";

export default function Milestones() {
  return (
    <>
      <div className="my-5">
        <img src={milestones} alt="" style={{ padding: "1.4rem" }} />
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
          {/* <li className="bullets-guideline">
          </li>
          <li className="bullets-guideline">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, sint!
          </li>
          <li className="bullets-guideline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            enim.
          </li>
          <li className="bullets-guideline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            perferendis.
          </li> */}
        </ul>
      </div>
    </>
  );
}
