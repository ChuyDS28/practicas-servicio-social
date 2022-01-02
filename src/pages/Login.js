import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import dvdr from "../assets/images/dvdr.png";
import img222 from "../assets/images/img222.jpg";
import imgt3 from "../assets/images/imgt3.jpg";
import imgt4 from "../assets/images/imgt4.jpg";
import imgt6 from "../assets/images/imgt6.jpg";
import cancha from "../assets/images/cancha.jpg";
import M from "materialize-css/dist/js/materialize.min.js";
import { login } from "../api/services/acceso";

const style = {
  inputLabel: {
    fontSize: "1rem",
    float: "left",
    marginLeft: "15px",
  },
  submitButton: {
    margin: "8px 0",
    height: "46px",
    maxWidth: "550px",
    width: "70%",
    borderRadius: "5px",
  },
  formInput: {
    boxSizing: "border-box",
    borderRadius: "5px",
    marginTop: "5px",
    padding: "0 15px",
  },
  img: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
  min: {
    background: "#217974",
    minHeight: "calc(100vh - 65px)",
    height: "100%",
    margin: "0",
  },
  img3: {
    width: "170px",
    marginTop: "20px",
    margin: "10px auto",
  },
};

const Login = () => {
  const Carrusel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
      let elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        duration: 300,
        fullWidth: "true",
        indicators: true,
      });
      const timer = setInterval(() => {
        var instance = M.Carousel.getInstance(carouselRef.current);
        instance.next();
      }, 5550);
      return () => clearInterval(timer);
    }, []);

    return (
      <div>
        <div
          className="carousel carousel-slider"
          style={{ height: "100%", minHeight: "calc(100vh - 65px)" }}
          ref={carouselRef}
        >
          <div
            className="carousel-fixed-item white-text center"
            style={{ margin: "0px", backgroundColor: "rgba(0,0, 0, 0.7)" }}
          >
            <h4>Instituto Politécnico Nacional</h4>
            <p>
              <b>"La Técnica al Servicio de la Patria"</b>
              <br /> <br />
            </p>
          </div>
          <a className="carousel-item" href="#one!">
            <img
              alt=""
              src={imgt4}
              className="responsive-img"
              style={style.img}
            />
          </a>
          <a className="carousel-item" href="#two!">
            <img
              alt=""
              src={imgt3}
              className="responsive-img"
              style={style.img}
            />
          </a>
          <a className="carousel-item" href="#three!">
            <img
              alt=""
              src={img222}
              className="responsive-img"
              style={style.img}
            />
          </a>
          <a className="carousel-item" href="#six!">
            <img
              alt=""
              src={cancha}
              className="responsive-img"
              style={style.img}
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img
              alt=""
              src={imgt6}
              className="responsive-img"
              style={style.img}
            />
          </a>
        </div>
      </div>
    );
  };
  const LoginForm = () => {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ error: false, message: "" });
    const [formValues, setFormValues] = useState({
      nickname: "",
      password: "",
    });

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (formValues.nickname === "" || formValues.password === "") {
        setError({ error: true, message: "Llenar campos" });
        return;
      }
      console.log("submit");
      setError({ error: false, message: "" });
      setIsLoading(true);
      const data = {
        nickname: formValues.nickname,
        secretword: formValues.password,
      };
      /* try {
         const response = await login(data);
        console.log(response);
        setIsLoading(false);
        //history.push("/account/".concat("331"));
      } catch (error) {
        console.log(error);
        /* setError({ error: true, message: error.response.data.error_message });
        if (error.response.data.error_message === undefined) {
          setError({ error: true, message: error.response.data.message });
        } 
        setIsLoading(false);
      } */
      if (formValues.nickname === "subdirector") {
        history.push("/subdirector/menu");
      }
      if (formValues.nickname === "director") {
        history.push("/director/menu");
      }
      if (formValues.nickname === "revisor") {
        history.push("/revisor/menu");
      }
      if (formValues.nickname === "admin") {
        history.push("/admin/menu");
      }
      if (formValues.nickname === "eacuerdos") {
        history.push("/eacuerdos/menu");
      }
    };

    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <div
        className="container center "
        style={{
          minHeight: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img src={dvdr} className="center" style={style.img3} alt="" />
        <h5 className="center white-text">
          <b>Iniciar sesión</b>
        </h5>
        <form onSubmit={handleSubmit} className="row">
          <div className="col s12 m12 xl12 center">
            <label className="white-text" style={style.inputLabel}>
              E-mail
            </label>
            <input
              name="nickname"
              value={formValues.nickname}
              onChange={handleChange}
              /* type="email" */
              className="teal lighten-2"
              style={style.formInput}
              required
              placeholder="Ingresa tu e-mail "
            />
          </div>
          <div className="col  s12 m12 xl12 center">
            <label className="white-text " style={style.inputLabel}>
              Contraseña
            </label>
            <Link
              to="/login"
              className="grey-text"
              style={{ marginLeft: "45px", fontSize: "1rem", float: "left" }}
            >
              ¿Has olvidado tu contraseña?
            </Link>
            <input
              name="password"
              value={formValues.password}
              onChange={handleChange}
              type="password"
              required
              className="teal lighten-2"
              placeholder="Crear una Contraseña"
              style={style.formInput}
            />
          </div>

          <div className="col s12 center">
            <button
              type="submit"
              style={style.submitButton}
              className="pink waves-effect waves-light btn "
            >
              Iniciar Sesión
            </button>
            <br />
            <p className="grey-text text-lighten-4">
              ¿Todavía no tienes una cuenta?
              <Link to="/signupUser" className="white-text">
                {" "}
                <b>Crea una ahora</b>
              </Link>
            </p>
            <br />
            {/*    <div className="col s12 center">
              <Link
                to="/director/menu"
                className="waves-effect waves-light btn-small col s5 m4"
              >
                Director
              </Link>

              <Link
                to="/subdirector/menu"
                className="waves-effect waves-light btn-small col s6 m5"
                style={{ marginLeft: "11px" }}
              >
                Subdirector
              </Link>

              <Link
                to="/revisor/menu"
                className="waves-effect waves-light btn-small col s5 m4"
                style={{ marginTop: "12px" }}
              >
                Revisor
              </Link>
              <Link
                to="/admin/menu"
                className="waves-effect waves-light btn-small col s6 m5"
                style={{ marginTop: "12px", marginLeft: "11px" }}
              >
                Administrador
              </Link>
            </div> */}
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="row" style={style.min}>
      <div
        className="col s12 m12 l7 x15  hide-on-med-and-down"
        style={{ padding: "0" }}
      >
        <Carrusel />
      </div>
      <div className="col s12 m12 l5 x17 ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
