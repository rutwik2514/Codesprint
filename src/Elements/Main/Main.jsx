import React from "react";
import Logo from "../../Assets/Logo.svg"
import Particle from "../../components/Particle";
import Campaign from "../../Assets/Campaign.svg"
import Tagline from "../../Assets/Tagline.svg"
import "../Main/Main.css"
export default function Main() {
    return (
        <>
            <section id="homepg">
            <section id="mainsection" className="d-flex justify-content-center align-items-center" >
                <div className="d-flex flex-column align-items-center" id="maindiv" >
                        <Particle />
                        <h3 className="text-center"><img src={Campaign} alt="" id="campaignlogo" /></h3>
                        <h3 className="text-center"><img src={Logo} alt="" id="logo" /></h3>
                        <h3 className="text-center"><img src={Tagline} alt="" id="tagline" /></h3>

                        <button type="button" className="btn btn-custom button1 fw-bold" id="registerbtn">Register</button>
                </div>
            </section>
            </section>
          
        </>
    )
}