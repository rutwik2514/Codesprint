import React from "react";
import Logo from "../../Assets/Logo.svg";
import Users from "../../Assets/users.svg";
import Envelope from "../../Assets/envelope.svg";
import Phone from "../../Assets/phone.svg";
import Twitter from "../../Assets/twitter.svg";
import Instagram from "../../Assets/instagram.svg";
import Linkedin from "../../Assets/linkedin.svg"
import Github from "../../Assets/github.svg"
import Discord from "../../Assets/discord.svg"
import "../Footer/Footer.css"
export default function Footer() {

    function handleChange1() {
        window.location.href='https://developers.google.com/';
    }
    function handleChange2() {
        window.location.href='http://iiitsurat.ac.in/';
    }
    function handleChange3(){
        window.location.href='https://gdsc.community.dev/indian-institute-of-information-technology-surat/';
    }
    function handleChange4() {
        window.location.href='mailto:gdsc@iiitsurat.ac.in';
    }
    function handleChange5() {
        window.location.href='https://twitter.com/dsc_iiitsurat';
    }
    function handleChange6() {
        window.location.href='https://www.instagram.com/gdsc_iiitsurat/';
    }
    function handleChange7() {
        window.location.href='https://www.linkedin.com/company/dsc-iiitsurat/';
    }
    function handleChange8() {
        window.location.href='https://github.com/DSC-IIIT-Surat';
    }
    function handleChange9() {
        window.location.href='';
    }
    //148 148 150
  return (
    <>
      <section className="footer" id="footer">
        <div className="footer-container" >
          <div className="footer-row" id="footerdiv">
            <div className="footer-col"  >
              <img src={Logo} className="footerlogo" alt="not found" id="footerlogo"/>
            </div>
            <div className="footer-col my-1">
              <h4>More Links</h4>
              <ul className="links">
                <li onClick={handleChange1} id="links-1">Google Developers</li>
                <li onClick={handleChange2} id="links-2" >IIIT Surat</li>
              </ul>
            </div>
            <div className="footer-col my-1">
              <h4>Contact Us</h4>
              <ul className="links">
                <li className="footerlist">
                  <img src={Users} className="awesomefnt my-2" alt="not found" />
                  <span onClick={handleChange3} id="links-3">Community Page</span>
                </li>
                <li className="footerlist">
                  <img src={Envelope}  className="awesomefnt my-2" alt="not found" />
                  <span style={{textTransform: "lowercase"}} onClick={handleChange4} id="links-4">
                    gdsc@iiitsurat.ac.in
                  </span>
                </li>
                <li className="footerlist">
                  <img src={Phone} alt="not found"  className="awesomefnt my-2" id="links-5"/> <span id="links5">Sparsh Jhariya - 9685233329</span> 
                </li>
                <li className="footerlist">
                 <img src={Phone} alt="not found" className="awesomefnt my-2" id="links-6"/> <span id="links6"> Avanish Singh - 7898024589</span>
                </li>
              </ul>
            </div>
            <div className="footer-col my-1">
              <h4>follow us</h4>
              <div className="social-links d-flex mx-1">
                <div>
                <img src={Twitter} alt="not found" className="awesomefnt mx-2"  onClick={handleChange5} id="links-7"/>

                </div>
                <div>
                <img src={Instagram} className="awesomefnt mx-2" alt="not found" onClick={handleChange6} id="links-8"/>
                </div>
                <div>
                    <img src={Linkedin} className="awesomefnt mx-2" alt="not found" onClick={handleChange7} id="links-9" />
                </div>
                <div>
                    <img src={Github} className="awesomefnt mx-2" alt="not found" onClick={handleChange8} id="links-10"/>
                </div>
                <div>
                    <img src={Discord} className="awesomefnt mx-2" alt="not found" onClick={handleChange9} id="links-11"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
