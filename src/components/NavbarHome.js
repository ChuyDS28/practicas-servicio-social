import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ipn from "../assets/images/ipnBlanco.png";
import dvd from "../assets/images/dvd.png";
import Footer from "../pages/Footer";

const style = {
  imgLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
  },
};
const NavbarHome = () => {
  let location = useLocation();
  //console.log(location);
  //console.log(location.pathname.indexOf("signup"));

  return (
    <>
      <header className="navbar-fixed">
        <nav
          style={{ padding: "0 15px", height: "65px" }}
          className="nav-wrapper teal "
        >
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
      </header>
      <main>
        <Outlet />
      </main>
      {location.pathname.indexOf("signup/") !== 1 &&
        location.pathname.indexOf("Login") !== 1 && <Footer />}
    </>
  );
};

export default NavbarHome;
