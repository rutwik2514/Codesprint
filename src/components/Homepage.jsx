import React from "react";
import Main from "../Elements/Main/Main.jsx";
import Navbar from "../Elements/Navbar/Navbar.jsx";
import Timeline from "../Elements/Timeline/Timeline.js";
import Ques from "../Elements/FAQ/Faq.jsx";
import Guideline from "../Elements/Guidelines/Guidelines.jsx";
import Footer from "../Elements/Footer/footer.jsx";
import Milestones from "../Elements/Milestones/Milestones.jsx";

function Homepage() {
  return (
    <>
      <div className="bg"></div>
      <div className="content">
        <Navbar />
        <Main />
        <div id="pagediv">
          <Timeline />
          <Ques />
          <Guideline />
          <Milestones />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
