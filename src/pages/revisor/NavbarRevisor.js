import React, { useEffect, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link, Outlet } from "react-router-dom";
import dvdr from "../../assets/images/dvdr.png";
import Footer from "../Footer";

const style = {
  imgLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
  },
};
const NavbarRevisor = () => {
  const sidenavRef = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sidenavRef.current, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openSideNav() {
    console.log("sidemap");
    var instance = M.Sidenav.getInstance(sidenavRef.current);
    instance.open();
  }

  const SideNav = () => (
    <ul className="sidenav" id="mobile-demo" ref={sidenavRef}>
      <li>
        <div class="user-view">
          <div class="background">
            <img src="https://picsum.photos/id/1019/300/250" />
          </div>
          <img class="circle" src="https://picsum.photos/300/300" />
          <span class="white-text name">John Doe</span>
          <span class="white-text email">jdandturk@gmail.com</span>
        </div>
      </li>
      <li>
        <h6 class="">&nbsp; &nbsp; SUBDIRECTOR</h6>
      </li>
      <li>
        <Link to="/">
          <i class="material-icons">account_circle</i>
          Perfil
        </Link>
      </li>
      <li>
        <Link to="/">
          <i class="material-icons">apps</i>
          Menú Principal
        </Link>
      </li>
      <li>
        <Link to="/">
          <i class="material-icons">input</i>
          Cerrar Sesión
        </Link>
      </li>
      <li>
        <a class="subheader">Secciones</a>
      </li>
      <li>
        <a class="waves-effect" href="#!">
          Listado de Registros
        </a>
      </li>
      <li>
        <a class="waves-effect" href="#!">
          Listado General
        </a>
      </li>
      <li>
        <a class="waves-effect" href="#!">
          Indicadores
        </a>
      </li>
      <li>
        <a class="waves-effect" href="#!">
          Instructores
        </a>
      </li>
    </ul>
  );
  return (
    <>
      <header className="navbar-fixed">
        <nav className="teal darken-2 ">
          <div
            className="nav-wrapper "
            style={{ maxWidth: "1400px", margin: "auto" }}
          >
            <ul className="left">
              <li>
                <a
                  href="#"
                  data-target="mobile-demo"
                  className="sidenav-trigger show-on-large"
                  onClick={openSideNav}
                >
                  <i className="material-icons">menu</i>
                </a>
              </li>
              <li className="  hide-on-med-and-down">
                <Link to="#" style={style.imgLink}>
                  <img src={dvdr} alt="" height="40px" />
                </Link>
              </li>
              <li className="  hide-on-med-and-down">
                <Link to="#" className="navTitle">
                  Dirección de Vinculación y Desarrollo Regional
                </Link>
              </li>
            </ul>
            <ul className="right">
              <li className="hide-on-small-only">
                <Link to="menu" className="navTitle">
                  Menú Principal
                </Link>
              </li>
              <li className="hide-on-small-only">
                <Link to="perfil" className="navTitle">
                  <i class="material-icons">account_circle</i>
                </Link>
              </li>

              <li>
                <Link to="/" className="navTitle">
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ul className="sidenav" id="mobile-demo" ref={sidenavRef}>
        <li>
          <div class="user-view">
            <div class="background">
              <img src="https://picsum.photos/id/1019/300/250" />
            </div>
            <img class="circle" src="https://picsum.photos/300/300" />
            <span class="white-text name">John Doe</span>
            <span class="white-text email">jdandturk@gmail.com</span>
          </div>
        </li>
        <li>
          <h6 class="">&nbsp; &nbsp; REVISOR</h6>
        </li>
        <li>
          <Link to="/">
            <i class="material-icons">account_circle</i>
            Perfil
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="material-icons">apps</i>
            Menú Principal
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="material-icons">input</i>
            Cerrar Sesión
          </Link>
        </li>
        <li>
          <a class="subheader">Secciones</a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Listado de Registros
          </a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Listado General
          </a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Indicadores
          </a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Instructores
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavbarRevisor;
