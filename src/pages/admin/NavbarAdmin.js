import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import dvdr from "../../assets/images/dvdr.png";
import Footer from "../Footer";
import { getUserData, setUserData } from "../../utils/userData";
import { logout } from "../../api/services/acceso";
import { obtenerUsuario } from "../../api/services/usuarios";
const style = {
  imgLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
  },
};
const NavbarAdmin = () => {
  const sidenavRef = useRef(null);
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    M.Sidenav.init(sidenavRef.current, {});
    console.log(getUserData());
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function userLogout() {
    try {
      const dataU = await logout();
      console.log(dataU);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  async function getUserInfo() {
    try {
      const dataU = await obtenerUsuario(getUserData().id);
      console.log(dataU);
      setUserData({ ...dataU.data, ...getUserData() });
      setUser(getUserData());
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  function openSideNav() {
    console.log("sidemap");
    var instance = M.Sidenav.getInstance(sidenavRef.current);
    instance.open();
  }

  const SideNav = () => (
    <>
      <li>
        <div className="user-view">
          <div className="background">
            <img src="https://picsum.photos/id/1019/300/250" />
          </div>
          <img className="circle" src="https://picsum.photos/300/300" />
          <span className="white-text name">{`${user.nombre} ${user.primerApellido} ${user.segundoApellido}`}</span>
          <span className="white-text email">{user.correoInstitucional}</span>
        </div>
      </li>
      <li>
        <h6 className="">&nbsp; &nbsp; {user.rol}</h6>
      </li>
      <li>
        <Link to="perfil" className="sidenav-close">
          <i className="material-icons">account_circle</i>
          Perfil
        </Link>
      </li>
      <li>
        <Link to="menu" className="sidenav-close">
          <i className="material-icons">apps</i>
          Menú Principal
        </Link>
      </li>
      <li>
        <a className="sidenav-close" onClick={userLogout}>
          <i className="material-icons">input</i>
          Cerrar sesión
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a className="subheader">Secciones</a>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          Listado de Registros
        </a>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          Listado General
        </a>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          Indicadores
        </a>
      </li>
      <li>
        <a className="waves-effect" href="#!">
          Instructores
        </a>
      </li>
    </>
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
                  <i className="material-icons">account_circle</i>
                </Link>
              </li>

              <li>
                <a className="navTitle" onClick={userLogout}>
                  Cerrar sesión
                </a>
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
        {Object.keys(user).length !== 0 && <SideNav />}
      </ul>
    </>
  );
};

export default NavbarAdmin;
