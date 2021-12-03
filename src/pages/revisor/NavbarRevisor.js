import React from "react";
import { Link } from "react-router-dom";
import dvdr from "../../assets/images/dvdr.png";

const style = {
  imgLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
  },
};
const NavbarRevisor = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal darken-2" style={{padding:"0 15px",height:"65px"}}>
          <div className=" container">
            <ul id="nav-mobile" className=" hide-on-med-and-down">
              <li>
                <Link to="/" style={style.imgLink} >
                  <img src={dvdr} alt="" height="40px"/>
                </Link>
              </li>
              <li>
                <Link to="/" className="navTitle">
                  Dirección de Vinculación y Desarrollo Regional
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/revisor/menu">Menu Principal</Link>
              </li>
              {/*  <li>
                <Link to="/user/listadoRegistros">Listado de registros</Link>
              </li> */}
              <li>
                <Link to="/">Salir</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarRevisor;