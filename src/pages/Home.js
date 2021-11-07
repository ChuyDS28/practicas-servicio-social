import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ellipse1 from "../assets/images/ellipse1.png";
import welcome from "../assets/images/welcome.png";
import dvdr from "../assets/images/dvdr.png";
import cic from "../assets/images/cic.png";
import cca from "../assets/images/CCA.png";
import ipn from "../assets/images/logo_ipn_guinda.svg";
import cicG from "../assets/images/cicG.jpg";
import ccaB from "../assets/images/CCA_big.png";
import Tarjeta from "../components/Tarjeta";

import Footer from "./Footer";
import M from "materialize-css/dist/js/materialize.min.js";

const style = {
  ellipse1: {
    position: "absolute",
    width: "1616px",
    height: " 1148px",
    top: "-800px",
    right: "-500px",
    zIndex: -1,
  },
  ellipse2: {
    position: "absolute",
    width: "1616px",
    height: "1148px",
    left: "-700px",
    bottom: "-900px",
    zIndex: -1,
  },
  main: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "1600px",
    margin: "auto",
    minHeight: "100vh",
  },
  welcome: {
    display: "inline-block",
    width: "100%",
    margin: "auto",
    marginTop: "-100px",
  },
  cardImg: {
    maxHeight: "200px",
    objectFit: "cover",
    filter: "brightness(0.8)",
  },
};

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(carouselRef.current, { duration: 500 });

    let instance = M.Carousel.getInstance(carouselRef.current);
    const timer = setInterval(() => {
      instance.next();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <main style={style.main}>
        <img src={ellipse1} alt="" style={style.ellipse1} />

        <div className="row">
          <div className="col s12 l6" style={{ padding: "0 4%" }}>
            <h1 className="header   ipn-text" style={{ fontSize: "3rem" }}>
              Dirección de Vinculación y Desarrollo Regional
            </h1>
            <blockquote>
              <h2
                className="header light"
                style={{ fontSize: "2rem", fontStyle: "italic" }}
              >
                Registro de programas de formación a lo largo de la vida
                (Programas menores a 25 Horas)
              </h2>
            </blockquote>
            <div className="row ">
              <div className="col s6 center">
                <Link
                  to="/Login"
                  className="waves-effect waves-light btn-large"
                >
                  Iniciar Sesión
                  <i className="material-icons right">send</i>
                </Link>
              </div>
              <div className="col s6 center">
                <Link
                  to="/signupUser"
                  className="waves-effect waves-light btn-large  outlined"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
          <div className="col s12  l6 center">
            <div className="carousel" ref={carouselRef}>
              <a className="carousel-item" href="#five!">
                <img alt="" src={ipn} height="200px" />
              </a>
              <a className="carousel-item" href="#one!">
                <img alt="" src={dvdr} />
              </a>
              <a className="carousel-item" href="#two!">
                <img alt="" src={cic} />
              </a>
              <a className="carousel-item" href="#three!">
                <img alt="" src={cca} />
              </a>
              <a className="carousel-item" href="#six!">
                <img alt="" src={ccaB} />
              </a>
              <a className="carousel-item" href="#four!">
                <img alt="" src={cicG} />
              </a>
            </div>
          </div>
        </div>
        <img
          alt=""
          className="hide-on-small-only"
          src={welcome}
          style={style.welcome}
        />
        <div className="row container ">
          <Tarjeta
            titI="Registros "
            titulo="Consultar historial total de registros"
            subtitulo="Puedes ver el nombre de todos los programas."
            min="LISTADO"
            imag="https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            link="/historialRegistros"
          />
          <Tarjeta
            titI="Registros"
            titulo="Consultar historial total registros vigentes"
            subtitulo="Puedes ver el listado de todos los programas."
            min="LISTADO"
            imag="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            link="/historialRegistrosVigentes"
          />
          <Tarjeta
            titI="Manual"
            titulo="Manual de usuario "
            subtitulo="¿Estas perdido?, Puedes ver el manual de usuario."
            min="MANUAL"
            imag="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            link=""
          />
        </div>
        <div className="center" style={{marginBottom:"35px"}}>
          <Link
            to="/centros"
            className="waves-effect waves-light btn-large outlined"
          >
            Centros de Vinculación y Desarrollo Regional
            <i className="material-icons right">send</i>
          </Link>
        </div>
        <img src={ellipse1} alt="" style={style.ellipse2} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
