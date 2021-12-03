import React from "react";
import { Link } from "react-router-dom";
import ipn from "../assets/images/ipnBlanco.png";
import dvd from "../assets/images/dvd.png";

const style = {
  imgLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
  },
};
const NavbarHome = () => {
  return (
    <nav style={{ padding: "0 15px", height: "65px" }} className="nav-wrapper teal ">
 
          <ul id="nav-mobile">
            <li>
              <Link to="/" style={style.imgLink}>
                <img src={dvd} alt="" height="65px" />
              </Link>
            </li>

            <li className="  hide-on-small-and-down">
              <Link to="/" className="navTitle">
                Dirección de Vinculación y Desarrollo Regional
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
              <img src={ipn} alt="" style={style.imgLink} />
            </li>
            <li className="hide-on-med-and-down" style={style.imgLink}>
              <p style={{ lineHeight: "16px", fontSize: ".7rem" }}>
                Instituto Politénico Nacional
                <br /> "La Técnica al Servicio de la Patria"
              </p>
            </li>
          </ul>
       
    </nav>
  );
};

export default NavbarHome;
