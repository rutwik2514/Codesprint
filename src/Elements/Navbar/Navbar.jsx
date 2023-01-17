import React from "react";
import "../Navbar/Navbar.css";
import Icon from "../../Assets/Icon.png";
import { useWindowSize } from "usehooks-ts";
// import { HashLink as Link } from 'react-router-hash-link';
// import {Link} from 'react-router-dom';
import Gdsc from "../../Assets/gdsc.png"
import Glogo from "../../Assets/glogo.png"
function Navbar() {
  const [burger, setburger] = React.useState(false);
  const [open, setopen] = React.useState(false);
  const { width } = useWindowSize();
  console.log(width);
  React.useEffect(() => {
    if (width <= 1100) {
      setburger(true);
    }
    if (width > 1100) {
      setburger(false);
    }
  }, [width]);

  function handleClick() {
    setopen(!open);
    console.log(open);
  }

  return (
    <>
      <nav id="navbardiv" className="fixed-top">
        <div id="logodiv">
          {/* logo
           */}
           {burger && <img src={Glogo} alt="" id="glogo"/>}
           {!burger &&<img src={Gdsc} alt="" id="gdsc"/> }
          {/* put image and give height accordingly */}
        </div>
        {burger && (
          <div className="burgerdiv">
            <img src={Icon} alt="" onClick={handleClick} id="iconimg" />
            {open && (
              <div id="burgeropen">
                <ul id="burgerinsidediv">
                  <li className="insideli" >Home</li>
                  <li className="insideli">Register</li>
                  <li className="insideli">Timeline</li>
                  <li className="insideli">Guidelines</li>
                  <li className="insideli">Contact Us</li>
                </ul>
              </div>
            )}
          </div>
        )}
        {!burger && (
          <ul id="rightdiv">
            <li id="btn-1">Home</li>
            <li id="btn-2">Register</li>
            <li id="btn-3">Timeline</li>
            <li id="btn-4">Guidelines</li>
            <li id="btn-5">Contact Us</li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
